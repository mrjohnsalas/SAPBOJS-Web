import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailureTypesRoutingModule } from './failure-types-routing.module';
import { FailureTypesComponent } from '../components/failure-types/failure-types.component';
import { FailureTypesListComponent } from '../components/failure-types/failure-types-list/failure-types-list.component';
import { FailureTypesDetailComponent } from '../components/failure-types/failure-types-detail/failure-types-detail.component';
import { FailureTypesFormComponent } from '../components/failure-types/failure-types-form/failure-types-form.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { FailureTypeService } from '../_services/failure-type.service';

@NgModule({
  declarations: [
    FailureTypesComponent,
    FailureTypesListComponent,
    FailureTypesDetailComponent,
    FailureTypesFormComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    FailureTypesRoutingModule
  ],
  providers: [
    FailureTypeService
  ]
})
export class FailureTypesModule { }
