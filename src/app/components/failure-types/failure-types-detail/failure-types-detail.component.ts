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
import { CommunicationService } from 'src/app/_services/communication.service';


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

  parentPath = 'failuretypes';
  basePath = `/${this.parentPath}/detail/`;
  editPath: string;
  deletePath: string;

  ids: number[];
  id: number;
  stepperBar: StepperBar;

  constructor(
    private failureTypeService: FailureTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private communicationService: CommunicationService) { }

  ngOnInit() {
    this.ids = this.communicationService.ids;
    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) {
        this.router.navigate(['/failuretypes']);
      }
      this.isLoadingData = true;
      this.id = parseInt(params.id);
      this.setStepperBar();
      this.setActionButtons();
      this.deleteMode = this.activatedRoute.routeConfig.path.split('/')[0] === 'delete';
      this.failureTypeService.get(this.id).subscribe(
        obj => this.onSuccess(obj),
        error => this.onError(error),
        () => this.stopLoading());
    });
  }

  setActionButtons() {
    this.editPath = `/${this.parentPath}/edit/${this.id}`;
    this.deletePath = `/${this.parentPath}/delete/${this.id}`;
  }

  setStepperBar() {
    if (this.ids && this.id) {
      this.stepperBar = new StepperBar(this.ids, this.id, this.basePath);
    } else {
      this.stepperBar = null;
    }
  }

  onSuccess(obj: FailureType) {
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

  }

}
