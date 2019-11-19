import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from 'src/app/_models/service-exception';
import { BgColor } from 'src/app/_models/bg-color.enum';
import { EntityType } from 'src/app/_models/entity-type.enum';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';
import { StepperBar } from 'src/app/_models/stepper-bar';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import { AppHelperService } from 'src/app/_services/app-helper.service';
import { StatusType } from '../../../_models/status-type.enum';

import { ProductionMachine } from 'src/app/_models/production-machine';
import { ProductionMachineService } from 'src/app/_services/production-machine.service';
import { ProductionMachineSharedService } from '../../../_services/production-machine-shared.service';

@Component({
  selector: 'app-production-machines-detail',
  templateUrl: './production-machines-detail.component.html',
  styleUrls: ['./production-machines-detail.component.scss']
})
export class ProductionMachinesDetailComponent implements OnInit {

  objName = 'Máquina de producción';
  deleteMode = false;
  isLoadingData = false;
  currentObj: ProductionMachine;
  spinnerType = SpinnerType;
  entityType = EntityType.ProductionMachine;
  serviceException: ServiceException;
  bgColor = BgColor;
  parentPath = 'productionmachines';
  indexPath = `/${this.parentPath}`;
  editPath: string;
  deletePath: string;
  ids: number[];
  id: number;
  stepperBar: StepperBar;

  constructor(
    private objService: ProductionMachineService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private objSharedService: ProductionMachineSharedService,
    public appSettingsService: AppSettingsService,
    private appHelperService: AppHelperService) { }

  ngOnInit() {
    this.ids = this.objSharedService.ids;
    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) {
        this.appHelperService.sendErrorMessage(this.appSettingsService.IdNotFoundError);
        this.goToIndex();
      }
      this.clearObjs();
      this.isLoadingData = true;
      this.id = parseInt(params.id);
      this.deleteMode = this.activatedRoute.routeConfig.path.split('/')[0] === this.appSettingsService.DeleteLink;
      this.setStepperBar();
      this.objService.get(this.id).subscribe(
        obj => this.onLoadForm(obj),
        error => this.onError(error),
        () => this.stopLoading());
    });
  }

  clearObjs() {
    this.currentObj = undefined;
    this.id = undefined;
    this.deleteMode = false;
    this.stepperBar = undefined;
    this.editPath = undefined;
    this.deletePath = undefined;
    this.serviceException = undefined;
  }

  onLoadForm(obj: ProductionMachine) {
    this.currentObj = obj;
    this.setActionButtons();
  }

  setActionButtons() {
    if (this.currentObj && this.currentObj.statusId === StatusType.Activo) {
      this.editPath = `/${this.parentPath}/${this.appSettingsService.EditLink}/${this.id}`;
      this.deletePath = `/${this.parentPath}/${this.appSettingsService.DeleteLink}/${this.id}`;
    }
  }

  setStepperBar() {
    if (this.ids && this.id) {
      this.stepperBar = new StepperBar(this.ids, this.id, `/${this.parentPath}/${ this.deleteMode
        ? this.appSettingsService.DeleteLink : this.appSettingsService.DetailLink }/`);
    }
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.serviceException = this.appHelperService.getServiceExceptionObject(errorResponse);
    if (this.serviceException.isNotFoundError) {
      this.appHelperService.sendErrorMessage(this.serviceException.message);
      this.goToIndex();
    }
  }

  onDeleteSuccess(obj: ProductionMachine) {
    this.stopLoading();
    this.appHelperService.sendSuccessMessage(this.appSettingsService.GoodNotification);
    this.goToIndex();
  }

  goToIndex() {
    this.router.navigate([`/${this.parentPath}`]);
  }

  stopLoading() {
    this.isLoadingData = false;
  }

  delete() {
    this.appHelperService.sendDeleteQuestionAlert().then((response) => {
      if (response) {
        this.isLoadingData = true;
        this.objService.delete(this.id).subscribe(
          obj => this.onDeleteSuccess(obj),
          error => this.onError(error),
          () => this.stopLoading()
        );
      }
    });
  }

}
