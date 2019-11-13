import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppSettingsService } from '../../../_services/app-settings.service';
import { StepperBar } from 'src/app/_models/stepper-bar';
import { ServiceException } from 'src/app/_models/service-exception';
import { BgColor } from 'src/app/_models/bg-color.enum';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';

@Component({
  selector: 'app-obj-detail',
  templateUrl: './obj-detail.component.html',
  styleUrls: ['./obj-detail.component.scss']
})
export class ObjDetailComponent implements OnInit {

  @Input()
  objName: string;

  @Input()
  isLoadingData = false;

  @Input()
  currentObj: object;

  @Input()
  indexPath: string;

  @Input()
  editPath: string;

  @Input()
  deletePath: string;

  @Input()
  deleteMode = false;

  @Input()
  stepperBar: StepperBar;

  @Input()
  serviceException: ServiceException;

  @Output()
  sendEventDelete = new EventEmitter();

  spinnerType = SpinnerType;
  bgColor = BgColor;

  constructor(public appSettingsService: AppSettingsService) { }

  ngOnInit() {
  }

  delete() {
    this.sendEventDelete.emit();
  }

}
