import { Component, OnInit, Input } from '@angular/core';
import { SpinnerType } from '../../_models/spinner-type.enum';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input()
  selectedSpinner: SpinnerType.RotatingPlane;
  spinnerType = SpinnerType;

  constructor() { }

  ngOnInit() {
  }

}
