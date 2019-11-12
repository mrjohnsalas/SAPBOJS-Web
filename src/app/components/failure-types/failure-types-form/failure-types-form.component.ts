import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FailureTypeService } from 'src/app/_services/failure-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FailureType } from '../../../_models/failure-type';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { CanDeactivateRoute } from 'src/app/_helpers/lose-changes.guard';
import swal from 'sweetalert';
import { Observable } from 'rxjs';
import { ServiceException } from '../../../_models/service-exception';
import { HttpErrorResponse } from '@angular/common/http';
import { Utils } from '../../../_helpers/utils.helper';
import { BgColor } from '../../../_models/bg-color.enum';
import { AppSettingsService } from 'src/app/_services/app-settings.service';

@Component({
  selector: 'app-failure-types-form',
  templateUrl: './failure-types-form.component.html',
  styleUrls: ['./failure-types-form.component.scss']
})
export class FailureTypesFormComponent implements OnInit, CanDeactivateRoute {

  objName = 'Tipo de falla';
  editMode = false;
  formGroup: FormGroup;
  isLoadingData = false;
  spinnerType = SpinnerType;
  bgColor = BgColor;
  id: number;
  saved = false;
  serviceException: ServiceException;
  utils = new Utils();
  parentPath = 'failuretypes';
  indexPath = `/${this.parentPath}`;
  nameMaxLength: 30;
  descriptionMaxLength: 100;

  constructor(
    private formBuilder: FormBuilder,
    private objService: FailureTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public appSettingsService: AppSettingsService) { }

  get name() {
    return this.formGroup.get('name');
  }

  get description() {
    return this.formGroup.get('description');
  }

  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.saved) { return true; }

    return swal({
      title: this.appSettingsService.QuestionTitle,
      text: this.appSettingsService.ExitQuestion,
      icon: this.bgColor.Warning,
      buttons: {
        cancel: {
          text: this.appSettingsService.CancelAction,
          value: false,
          className: '',
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: this.appSettingsService.ExitAction,
          value: true,
          className: '',
          visible: true,
          closeModal: true
        }
      },
    }).then( (val) => val );
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.nameMaxLength)]],
      description: ['', [Validators.maxLength(this.descriptionMaxLength)]]
    });

    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) { return; }
      this.isLoadingData = true;
      this.editMode = true;
      this.id = params.id;
      this.objService.get(this.id).subscribe(
        obj => this.onLoadForm(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    });

  }

  onLoadForm(obj: FailureType) {
    this.formGroup.patchValue({
      name: obj.name,
      description: obj.description
    });
  }

  submit() {
    this.saved = true;

    if (!this.formGroup.valid) {
      alert('Error');
      return;
    }

    this.isLoadingData = true;

    const failureType: FailureType = Object.assign({}, this.formGroup.value);

    this.serviceException = null;

    if (this.editMode) {
      failureType.id = this.id;
      this.objService.update(failureType).subscribe(
        obj => this.onSaveSuccess(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    } else {
      this.objService.create(failureType).subscribe(
        obj => this.onSaveSuccess(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    }
  }

  onSaveSuccess(obj: FailureType) {
    this.stopLoading();
    this.goToIndex();
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.saved = false;
    this.serviceException = this.utils.getServiceExceptionObject(errorResponse);
  }

  stopLoading() {
    this.isLoadingData = false;
  }

  goToIndex() {
    this.router.navigate([`/${this.parentPath}`]);
  }

}
