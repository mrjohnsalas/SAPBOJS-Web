import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoadDataComponent } from '../components/shared/load-data/load-data.component';
import { SpinnerComponent } from '../components/shared/spinner/spinner.component';
import { SpinnerOverlayWrapperComponent } from '../components/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { StatusLabelComponent } from '../components/shared/status-label/status-label.component';
import { BasicSearchFormComponent } from '../components/shared/basic-search-form/basic-search-form.component';
import { OptionButtonBarComponent } from '../components/shared/option-button-bar/option-button-bar.component';
import { BreadcrumbComponent } from '../components/shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    LoadDataComponent,
    SpinnerComponent,
    SpinnerOverlayWrapperComponent,
    StatusLabelComponent,
    BasicSearchFormComponent,
    OptionButtonBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    LoadDataComponent,
    SpinnerComponent,
    SpinnerOverlayWrapperComponent,
    StatusLabelComponent,
    BasicSearchFormComponent,
    OptionButtonBarComponent
  ]
})
export class SharedModule { }
