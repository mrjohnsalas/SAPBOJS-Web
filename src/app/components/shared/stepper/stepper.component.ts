import { Component, OnInit, Input } from '@angular/core';
import { StepperBar } from '../../../_models/stepper-bar';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input()
  stepperBar: StepperBar;

  constructor() { }

  ngOnInit() {
  }

}
