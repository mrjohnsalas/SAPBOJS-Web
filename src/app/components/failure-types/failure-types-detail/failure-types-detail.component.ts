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

@Component({
  selector: 'app-failure-types-detail',
  templateUrl: './failure-types-detail.component.html',
  styleUrls: ['./failure-types-detail.component.scss']
})
export class FailureTypesDetailComponent implements OnInit {

  deleteMode = false;
  isLoadingData = false;
  id: number;
  failureType: FailureType;
  spinnerType = SpinnerType;
  entityType = EntityType;
  serviceException: ServiceException;
  utils = new Utils();
  parentPath = 'failuretypes';
  pathEdit: string;
  bgColor = BgColor;
  stepperBar: StepperBar;

  constructor(
    private failureTypeService: FailureTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) {
        this.router.navigate(['/failuretypes']);
      }
      this.isLoadingData = true;
      this.id = parseInt(params.id);
      this.pathEdit = this.utils.getRouterLinkValue(this.parentPath, 'edit', this.id);
      this.deleteMode = this.activatedRoute.routeConfig.path.split('/')[0] === 'delete';
      this.failureTypeService.get(this.id).subscribe(
        obj => this.onLoadForm(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    });
  }

  onLoadForm(obj: FailureType) {
    this.failureType = obj;
    this.getStepperBar();
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

  getStepperBar() {
    this.stepperBar = new StepperBar();
    this.stepperBar.pathFirst = this.utils.getRouterLinkValue(this.parentPath, 'detail', 1);
    this.stepperBar.pathPrevious = this.utils.getRouterLinkValue(this.parentPath, 'detail', this.id - 1);
    this.stepperBar.pathNext = this.utils.getRouterLinkValue(this.parentPath, 'detail', this.id + 1);
    this.stepperBar.pathLast = this.utils.getRouterLinkValue(this.parentPath, 'detail', 9);
  }

}
