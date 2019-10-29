import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FailureTypesRoutingModule } from './failure-types-routing.module';
import { FailureTypesComponent } from '../components/failure-types/failure-types.component';
import { FailureTypesListComponent } from '../components/failure-types/failure-types-list/failure-types-list.component';
import { FailureTypesDetailComponent } from '../components/failure-types/failure-types-detail/failure-types-detail.component';
import { FailureTypesFormComponent } from '../components/failure-types/failure-types-form/failure-types-form.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { FailureTypeService } from '../_services/failure-type.service';
import { LoadDataComponent } from '../components/load-data/load-data.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { SpinnerOverlayWrapperComponent } from '../components/spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { StatusLabelComponent } from '../components/status-label/status-label.component';
import { BasicSearchFormComponent } from '../components/basic-search-form/basic-search-form.component';
import { ShowOptionButtonBarDirective } from '../_directives/show-option-button-bar.directive';

@NgModule({
  declarations: [
    FailureTypesComponent,
    FailureTypesListComponent,
    FailureTypesDetailComponent,
    FailureTypesFormComponent,
    BreadcrumbComponent,
    LoadDataComponent,
    SpinnerComponent,
    SpinnerOverlayWrapperComponent,
    StatusLabelComponent,
    BasicSearchFormComponent,
    ShowOptionButtonBarDirective
  ],
  imports: [
    CommonModule,
    FailureTypesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FailureTypeService
  ]
})
export class FailureTypesModule { }
