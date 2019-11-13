import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import { StepperBar } from 'src/app/_models/stepper-bar';
import { ServiceException } from 'src/app/_models/service-exception';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';
import { BgColor } from 'src/app/_models/bg-color.enum';

@Component({
  selector: 'app-obj-form',
  templateUrl: './obj-form.component.html',
  styleUrls: ['./obj-form.component.scss']
})
export class ObjFormComponent implements OnInit {

  @Input()
  objName: string;

  @Input()
  isLoadingData = false;

  @Input()
  formGroup: FormGroup;

  @Input()
  indexPath: string;

  @Input()
  serviceException: ServiceException;

  @Input()
  editMode = false;

  @Output()
  sendEventSubmit = new EventEmitter();

  spinnerType = SpinnerType;
  bgColor = BgColor;

  constructor(public appSettingsService: AppSettingsService) { }

  ngOnInit() {
  }

  submit() {
    this.sendEventSubmit.emit();
  }

}
