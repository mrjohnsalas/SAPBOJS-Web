import { Component, OnInit, Input } from '@angular/core';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';

@Component({
  selector: 'app-spinner-overlay-wrapper',
  templateUrl: './spinner-overlay-wrapper.component.html',
  styleUrls: ['./spinner-overlay-wrapper.component.scss']
})
export class SpinnerOverlayWrapperComponent implements OnInit {

  @Input()
  selectedSpinner: SpinnerType.RotatingPlane;

  @Input()
  showSpinner: false;

  constructor() { }

  ngOnInit() {
  }

}
