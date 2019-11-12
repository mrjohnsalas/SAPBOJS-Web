import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadDataComponent } from '../components/shared/load-data/load-data.component';
import { SpinnerComponent } from '../components/shared/spinner/spinner.component';
import { SpinnerOverlayWrapperComponent } from '../components/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { StatusLabelComponent } from '../components/shared/status-label/status-label.component';
import { BasicSearchFormComponent } from '../components/shared/basic-search-form/basic-search-form.component';
import { OptionButtonBarComponent } from '../components/shared/option-button-bar/option-button-bar.component';
import { BreadcrumbComponent } from '../components/shared/breadcrumb/breadcrumb.component';
import { AlertComponent } from '../components/shared/alert/alert.component';
import { StepperComponent } from '../components/shared/stepper/stepper.component';
import { ObjDetailComponent } from '../components/shared/obj-detail/obj-detail.component';
import { ObjFormComponent } from '../components/shared/obj-form/obj-form.component';
import { ObjListComponent } from '../components/shared/obj-list/obj-list.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    LoadDataComponent,
    SpinnerComponent,
    SpinnerOverlayWrapperComponent,
    StatusLabelComponent,
    BasicSearchFormComponent,
    OptionButtonBarComponent,
    AlertComponent,
    StepperComponent,
    ObjDetailComponent,
    ObjFormComponent,
    ObjListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BreadcrumbComponent,
    LoadDataComponent,
    SpinnerComponent,
    SpinnerOverlayWrapperComponent,
    StatusLabelComponent,
    BasicSearchFormComponent,
    OptionButtonBarComponent,
    AlertComponent,
    StepperComponent,
    ObjDetailComponent,
    ObjFormComponent,
    ObjListComponent
  ]
})
export class SharedModule { }
