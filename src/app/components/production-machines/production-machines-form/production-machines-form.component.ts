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

import { ProductionMachineService } from 'src/app/_services/production-machine.service';
import { ProductionMachine } from '../../../_models/production-machine';

@Component({
  selector: 'app-production-machines-form',
  templateUrl: './production-machines-form.component.html',
  styleUrls: ['./production-machines-form.component.scss']
})
export class ProductionMachinesFormComponent implements OnInit, CanDeactivateRoute {

  objName = 'Máquina de producción';
  editMode = false;
  formGroup: FormGroup;
  isLoadingData = false;
  spinnerType = SpinnerType;
  bgColor = BgColor;
  id: number;
  saved = false;
  serviceException: ServiceException;
  parentPath = 'productionmachines';
  indexPath = `/${this.parentPath}`;
  nameMaxLength: 30;

  constructor(
    private formBuilder: FormBuilder,
    private objService: ProductionMachineService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public appSettingsService: AppSettingsService,
    private appHelperService: AppHelperService) { }

  get name() {
    return this.formGroup.get('name');
  }

  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.saved) { return true; }

    return this.appHelperService.sendCanExitAlert().then( (val) => val );
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.nameMaxLength)]]
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

  onLoadForm(obj: ProductionMachine) {
    this.formGroup.patchValue({
      name: obj.name
    });
  }

  submit() {
    this.saved = true;

    if (this.formGroup.invalid) {
      this.appHelperService.sendInvalidFormAlert();
      return;
    }

    this.isLoadingData = true;

    const formObj: ProductionMachine = Object.assign({}, this.formGroup.value);

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

  onSaveSuccess(obj: ProductionMachine) {
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
