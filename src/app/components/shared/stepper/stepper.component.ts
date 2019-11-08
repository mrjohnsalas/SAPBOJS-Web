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

  @Input()
  isLoadingData = false;

  pathFirst: string;
  pathPrevious: string;
  pathNext: string;
  pathLast: string;

  firstIndex: number;
  currentIndex: number;
  previousIndex: number;
  nextIndex: number;
  lastIndex: number;

  constructor() { }

  ngOnInit() {
    if (this.stepperBar) {
      this.firstIndex = 0;
      this.currentIndex = this.stepperBar.ids.indexOf(this.stepperBar.id);
      this.lastIndex = this.stepperBar.ids.length - 1;
      this.previousIndex = (this.currentIndex - 1) < 0 ? 0 : (this.currentIndex - 1);
      this.nextIndex = (this.currentIndex + 1) > this.lastIndex ? this.lastIndex : (this.currentIndex + 1);
      this.updateLinks();
    }
  }

  first() {
    if (this.currentIndex !== this.firstIndex) {
      this.currentIndex = this.firstIndex;
      this.previousIndex = this.firstIndex;
      this.nextIndex = this.firstIndex + 1;
      this.updateLinks();
    }
  }

  last() {
    if (this.currentIndex !== this.lastIndex) {
      this.currentIndex = this.lastIndex;
      this.nextIndex = this.lastIndex;
      this.previousIndex = this.lastIndex - 1;
      this.updateLinks();
    }
  }

  next() {
    if (this.currentIndex !== this.lastIndex) {
      this.previousIndex += 1;
      this.currentIndex += 1;
      this.nextIndex += 1;
      this.updateLinks();
    }
  }

  previous() {
    if (this.currentIndex !== this.firstIndex) {
      this.previousIndex -= 1;
      this.currentIndex -= 1;
      this.nextIndex -= 1;
      this.updateLinks();
    }
  }

  updateLinks() {
    this.pathFirst = `${this.stepperBar.basePath}${this.stepperBar.ids[this.firstIndex]}`;
    this.pathPrevious = `${this.stepperBar.basePath}${this.stepperBar.ids[this.previousIndex]}`;
    this.pathNext = `${this.stepperBar.basePath}${this.stepperBar.ids[this.nextIndex]}`;
    this.pathLast = `${this.stepperBar.basePath}${this.stepperBar.ids[this.lastIndex]}`;
  }

}
