import { Component, OnInit } from '@angular/core';
import { FailureTypeService } from 'src/app/_services/failure-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FailureType } from 'src/app/_models/failure-type';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from 'src/app/_models/service-exception';
import { Utils } from 'src/app/_helpers/utils.helper';
import { BgColor } from 'src/app/_models/bg-color.enum';
import { EntityType } from 'src/app/_models/entity-type.enum';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';
import { StepperBar } from '../../../_models/stepper-bar';
import { AppSettingsService } from '../../../_services/app-settings.service';
import { FailureTypeSharedService } from '../../../_services/failure-type-shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-failure-types-detail',
  templateUrl: './failure-types-detail.component.html',
  styleUrls: ['./failure-types-detail.component.scss']
})
export class FailureTypesDetailComponent implements OnInit {

  deleteMode = false;
  isLoadingData = false;
  currentObj: FailureType;
  spinnerType = SpinnerType;
  entityType = EntityType;
  serviceException: ServiceException;
  utils = new Utils();
  bgColor = BgColor;
  objName = 'Tipo de falla';
  parentPath = 'failuretypes';
  indexPath = `/${this.parentPath}`;
  editPath: string;
  deletePath: string;

  ids: number[];
  id: number;
  stepperBar: StepperBar;

  constructor(
    private objService: FailureTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private objSharedService: FailureTypeSharedService,
    public appSettingsService: AppSettingsService) { }

  ngOnInit() {
    this.ids = this.objSharedService.ids;
    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) {
        this.goToIndex();
      }
      this.isLoadingData = true;
      this.id = parseInt(params.id);
      this.deleteMode = this.activatedRoute.routeConfig.path.split('/')[0] === this.appSettingsService.DeleteLink;
      this.setStepperBar();
      this.setActionButtons();
      this.objService.get(this.id).subscribe(
        obj => this.onLoadForm(obj),
        error => this.onError(error),
        () => this.stopLoading());
    });
  }

  setActionButtons() {
    this.editPath = `/${this.parentPath}/${this.appSettingsService.EditLink}/${this.id}`;
    this.deletePath = `/${this.parentPath}/${this.appSettingsService.DeleteLink}/${this.id}`;
  }

  setStepperBar() {
    if (this.ids && this.id) {
      this.stepperBar = new StepperBar(this.ids, this.id, `/${this.parentPath}/${ this.deleteMode
        ? this.appSettingsService.DeleteLink : this.appSettingsService.DetailLink }/`);
    } else {
      this.stepperBar = null;
    }
  }

  onLoadForm(obj: FailureType) {
    this.currentObj = obj;
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.serviceException = this.utils.getServiceExceptionObject(errorResponse);
  }

  stopLoading() {
    this.isLoadingData = false;
  }

  delete() {
    swal({
      title: this.appSettingsService.QuestionTitle,
      text: this.appSettingsService.DeleteQuestion,
      icon: 'danger',
      buttons: {
        cancel: {
          text: this.appSettingsService.CancelAction,
          value: false,
          className: '',
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: this.appSettingsService.DeleteAction,
          value: true,
          className: '',
          visible: true,
          closeModal: true
        }
      },
    }).then((response) => {
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

  goToIndex() {
    this.router.navigate([`/${this.parentPath}`]);
  }

  onDeleteSuccess(obj: FailureType) {
    this.stopLoading();
    this.goToIndex();
  }

}
