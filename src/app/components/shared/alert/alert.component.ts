import { Component, OnInit, Input } from '@angular/core';
import { BgColor } from '../../../_models/bg-color.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input()
  bgColor: BgColor.Danger;

  @Input()
  text: string;

  constructor() { }

  getAlertClass(): string {
    return `alert-${this.bgColor}`;
  }

}
