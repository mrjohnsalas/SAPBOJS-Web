import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanDeactivateRoute } from 'src/app/_helpers/lose-changes.guard';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { ServiceException } from '../../../_models/service-exception';
import { Utils } from '../../../_helpers/utils.helper';
import { BgColor } from '../../../_models/bg-color.enum';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import swal from 'sweetalert';

import { FailureMechanismService } from 'src/app/_services/failure-mechanism.service';
import { FailureMechanism } from '../../../_models/failure-mechanism';

@Component({
  selector: 'app-failure-mechanisms-form',
  templateUrl: './failure-mechanisms-form.component.html',
  styleUrls: ['./failure-mechanisms-form.component.scss']
})
export class FailureMechanismsFormComponent implements OnInit {

  objName = 'Mecanismo de falla';
  editMode = false;
  formGroup: FormGroup;
  isLoadingData = false;
  spinnerType = SpinnerType;
  bgColor = BgColor;
  id: number;
  saved = false;
  serviceException: ServiceException;
  utils = new Utils();
  parentPath = 'failuremechanisms';
  indexPath = `/${this.parentPath}`;
  nameMaxLength: 30;
  descriptionMaxLength: 100;

  constructor(
    private formBuilder: FormBuilder,
    private objService: FailureMechanismService,
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

  onLoadForm(obj: FailureMechanism) {
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

    const formObj: FailureMechanism = Object.assign({}, this.formGroup.value);

    this.serviceException = null;

    if (this.editMode) {
      formObj.id = this.id;
      this.objService.update(formObj).subscribe(
        obj => this.onSaveSuccess(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    } else {
      this.objService.create(formObj).subscribe(
        obj => this.onSaveSuccess(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    }
  }

  onSaveSuccess(obj: FailureMechanism) {
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
