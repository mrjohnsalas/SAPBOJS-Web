import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FailureTypesRoutingModule } from './failure-types-routing.module';
import { FailureTypesComponent } from '../components/failure-types/failure-types.component';
import { FailureTypesListComponent } from '../components/failure-types/failure-types-list/failure-types-list.component';
import { FailureTypesDetailComponent } from '../components/failure-types/failure-types-detail/failure-types-detail.component';
import { FailureTypesFormComponent } from '../components/failure-types/failure-types-form/failure-types-form.component';
import { FailureTypeService } from '../_services/failure-type.service';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    FailureTypesComponent,
    FailureTypesListComponent,
    FailureTypesDetailComponent,
    FailureTypesFormComponent
  ],
  imports: [
    CommonModule,
    FailureTypesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureTypeService
  ]
})
export class FailureTypesModule { }
