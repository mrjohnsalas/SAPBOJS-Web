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
import { ToastrType } from 'src/app/_models/toastr-type.enum';
import swal from 'sweetalert';

import { FailureCauseService } from 'src/app/_services/failure-cause.service';
import { FailureCause } from '../../../_models/failure-cause';

declare function sendToastr(toastrType: ToastrType, message: string, title: string): any;

@Component({
  selector: 'app-failure-causes-form',
  templateUrl: './failure-causes-form.component.html',
  styleUrls: ['./failure-causes-form.component.scss']
})
export class FailureCausesFormComponent implements OnInit, CanDeactivateRoute {

  objName = 'Causa de falla';
  editMode = false;
  formGroup: FormGroup;
  isLoadingData = false;
  spinnerType = SpinnerType;
  bgColor = BgColor;
  id: number;
  saved = false;
  serviceException: ServiceException;
  utils = new Utils();
  parentPath = 'failurecauses';
  indexPath = `/${this.parentPath}`;
  nameMaxLength: 30;
  descriptionMaxLength: 100;

  constructor(
    private formBuilder: FormBuilder,
    private objService: FailureCauseService,
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
      this.id = parseInt(params.id);
      this.objService.get(this.id).subscribe(
        obj => this.onLoadForm(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    });
  }

  onLoadForm(obj: FailureCause) {
    this.formGroup.patchValue({
      name: obj.name,
      description: obj.description
    });
  }

  submit() {
    this.saved = true;

    if (this.formGroup.invalid) {
      swal(this.appSettingsService.InvalidFormErrorTitle, this.appSettingsService.InvalidFormErrorMessage, this.bgColor.Warning);
      return;
    }

    this.isLoadingData = true;

    const formObj: FailureCause = Object.assign({}, this.formGroup.value);

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

  onSaveSuccess(obj: FailureCause) {
    this.stopLoading();
    sendToastr(ToastrType.Success, this.appSettingsService.GoodNotification, this.appSettingsService.AppMinName);
    this.goToIndex();
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.saved = false;
    this.serviceException = this.utils.getServiceExceptionObject(errorResponse, this.appSettingsService);
    if (this.editMode && this.serviceException.isNotFoundError) {
      this.saved = true;
      sendToastr(ToastrType.Error, this.serviceException.message, this.appSettingsService.AppMinName);
      this.goToIndex();
    }
  }

  stopLoading() {
    this.isLoadingData = false;
  }

  goToIndex() {
    this.router.navigate([`/${this.parentPath}`]);
  }

}
