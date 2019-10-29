import { Component, OnInit, Input } from '@angular/core';
import { OptionButtonBar } from 'src/app/_models/option-button-bar';

@Component({
  selector: 'app-option-button-bar',
  templateUrl: './option-button-bar.component.html',
  styleUrls: ['./option-button-bar.component.scss']
})
export class OptionButtonBarComponent implements OnInit {

  @Input()
  optionButtonBar: OptionButtonBar;

  constructor() { }

  ngOnInit() {
  }

}
