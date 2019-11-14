import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from 'src/app/_models/service-exception';
import { Utils } from 'src/app/_helpers/utils.helper';
import { BgColor } from 'src/app/_models/bg-color.enum';
import { EntityType } from 'src/app/_models/entity-type.enum';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';
import { StepperBar } from 'src/app/_models/stepper-bar';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import { ToastrType } from 'src/app/_models/toastr-type.enum';
import swal from 'sweetalert';

import { FailureMechanism } from '../../../_models/failure-mechanism';
import { FailureMechanismService } from 'src/app/_services/failure-mechanism.service';
import { FailureMechanismSharedService } from 'src/app/_services/failure-mechanism-shared.service';

declare function sendToastr(toastrType: ToastrType, message: string, title: string): any;

@Component({
  selector: 'app-failure-mechanisms-detail',
  templateUrl: './failure-mechanisms-detail.component.html',
  styleUrls: ['./failure-mechanisms-detail.component.scss']
})
export class FailureMechanismsDetailComponent implements OnInit {

  objName = 'Mecanismos de falla';
  deleteMode = false;
  isLoadingData = false;
  currentObj: FailureMechanism;
  spinnerType = SpinnerType;
  entityType = EntityType.FailureMechanism;
  serviceException: ServiceException;
  utils = new Utils();
  bgColor = BgColor;
  parentPath = 'failuremechanisms';
  indexPath = `/${this.parentPath}`;
  editPath: string;
  deletePath: string;
  ids: number[];
  id: number;
  stepperBar: StepperBar;

  constructor(
    private objService: FailureMechanismService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private objSharedService: FailureMechanismSharedService,
    public appSettingsService: AppSettingsService) { }

    ngOnInit() {
      this.ids = this.objSharedService.ids;
      this.activatedRoute.params.subscribe(params => {
        if (params.id === undefined) {
          sendToastr(ToastrType.Error, this.appSettingsService.IdNotFoundError, this.appSettingsService.AppMinName);
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

    onLoadForm(obj: FailureMechanism) {
      this.currentObj = obj;
    }

    onError(errorResponse: HttpErrorResponse) {
      this.stopLoading();
      this.serviceException = this.utils.getServiceExceptionObject(errorResponse, this.appSettingsService);
      if (this.serviceException.isNotFoundError) {
        sendToastr(ToastrType.Error, this.serviceException.message, this.appSettingsService.AppMinName);
        this.goToIndex();
      }
    }

    stopLoading() {
      this.isLoadingData = false;
    }

    delete() {
      swal({
        title: this.appSettingsService.QuestionTitle,
        text: this.appSettingsService.DeleteQuestion,
        icon: this.bgColor.Danger,
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

    onDeleteSuccess(obj: FailureMechanism) {
      this.stopLoading();
      sendToastr(ToastrType.Success, this.appSettingsService.GoodNotification, this.appSettingsService.AppMinName);
      this.goToIndex();
    }

}
