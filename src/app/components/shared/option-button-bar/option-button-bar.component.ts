import { Component, OnInit, Input, HostListener } from '@angular/core';
import { OptionButtonBar } from 'src/app/_models/option-button-bar';

@Component({
  selector: 'app-option-button-bar',
  templateUrl: './option-button-bar.component.html',
  styleUrls: ['./option-button-bar.component.scss']
})
export class OptionButtonBarComponent implements OnInit {

  @Input()
  optionButtonBar: OptionButtonBar;

  isOptionButtonBarVisible = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isOptionButtonBarVisible = true;
    console.log(this.isOptionButtonBarVisible);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isOptionButtonBarVisible = false;
    console.log(this.isOptionButtonBarVisible);
  }

}
