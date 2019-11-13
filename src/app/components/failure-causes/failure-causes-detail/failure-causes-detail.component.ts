import { Component, OnInit } from '@angular/core';
import { FailureCause } from '../../../_models/failure-cause';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';
import { EntityType } from 'src/app/_models/entity-type.enum';
import { ServiceException } from 'src/app/_models/service-exception';
import { Utils } from 'src/app/_helpers/utils.helper';
import { BgColor } from 'src/app/_models/bg-color.enum';
import { StepperBar } from 'src/app/_models/stepper-bar';
import { FailureCauseService } from 'src/app/_services/failure-cause.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FailureCauseSharedService } from 'src/app/_services/failure-cause-shared.service';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert';

@Component({
  selector: 'app-failure-causes-detail',
  templateUrl: './failure-causes-detail.component.html',
  styleUrls: ['./failure-causes-detail.component.scss']
})
export class FailureCausesDetailComponent implements OnInit {

  deleteMode = false;
  isLoadingData = false;
  currentObj: FailureCause;
  spinnerType = SpinnerType;
  entityType = EntityType;
  serviceException: ServiceException;
  utils = new Utils();
  bgColor = BgColor;
  objName = 'Causa de falla';
  parentPath = 'failurecauses';
  indexPath = `/${this.parentPath}`;
  editPath: string;
  deletePath: string;

  ids: number[];
  id: number;
  stepperBar: StepperBar;

  constructor(
    private objService: FailureCauseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private objSharedService: FailureCauseSharedService,
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

    onLoadForm(obj: FailureCause) {
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

    onDeleteSuccess(obj: FailureCause) {
      this.stopLoading();
      this.goToIndex();
    }

}
