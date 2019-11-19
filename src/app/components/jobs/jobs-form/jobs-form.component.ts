import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanDeactivateRoute } from 'src/app/_helpers/lose-changes.guard';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { ServiceException } from '../../../_models/service-exception';
import { BgColor } from '../../../_models/bg-color.enum';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import { AppHelperService } from 'src/app/_services/app-helper.service';

import { JobService } from 'src/app/_services/job.service';
import { Job } from '../../../_models/job';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})
export class JobsFormComponent implements OnInit, CanDeactivateRoute {

  objName = 'Puesto de trabajo';
  editMode = false;
  formGroup: FormGroup;
  isLoadingData = false;
  spinnerType = SpinnerType;
  bgColor = BgColor;
  id: number;
  saved = false;
  serviceException: ServiceException;
  parentPath = 'jobs';
  indexPath = `/${this.parentPath}`;
  nameMaxLength: 30;
  descriptionMaxLength: 100;

  constructor(
    private formBuilder: FormBuilder,
    private objService: JobService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public appSettingsService: AppSettingsService,
    private appHelperService: AppHelperService) { }

  get name() {
    return this.formGroup.get('name');
  }

  get description() {
    return this.formGroup.get('description');
  }

  get costHour() {
    return this.formGroup.get('costHour');
  }

  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.saved) { return true; }

    return this.appHelperService.sendCanExitAlert().then( (val) => val );
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.nameMaxLength)]],
      description: ['', [Validators.maxLength(this.descriptionMaxLength)]],
      costHour: ['', [Validators.required]]
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

  onLoadForm(obj: Job) {
    this.formGroup.patchValue({
      name: obj.name,
      description: obj.description,
      costHour: obj.costHour
    });
  }

  submit() {
    this.saved = true;

    if (this.formGroup.invalid) {
      this.appHelperService.sendInvalidFormAlert();
      return;
    }

    this.isLoadingData = true;

    const formObj: Job = Object.assign({}, this.formGroup.value);

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

  onSaveSuccess(obj: Job) {
    this.stopLoading();
    this.appHelperService.sendSuccessMessage(this.appSettingsService.GoodNotification);
    this.goToIndex();
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.saved = false;
    this.serviceException = this.appHelperService.getServiceExceptionObject(errorResponse);
    if (this.editMode && this.serviceException.isNotFoundError) {
      this.saved = true;
      this.appHelperService.sendErrorMessage(this.serviceException.message);
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
