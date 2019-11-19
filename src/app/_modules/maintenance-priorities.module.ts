import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { MaintenancePrioritiesRoutingModule } from './maintenance-priorities-routing.module';
import { FailureTypeSharedService } from '../_services/failure-type-shared.service';
import { FailureTypeService } from '../_services/failure-type.service';

import { MaintenancePrioritiesComponent } from '../components/maintenance-priorities/maintenance-priorities.component';
import { MaintenancePrioritiesListComponent } from '../components/maintenance-priorities/maintenance-priorities-list/maintenance-priorities-list.component';
import { MaintenancePrioritiesDetailComponent } from '../components/maintenance-priorities/maintenance-priorities-detail/maintenance-priorities-detail.component';
import { MaintenancePrioritiesFormComponent } from '../components/maintenance-priorities/maintenance-priorities-form/maintenance-priorities-form.component';

@NgModule({
  declarations: [
    MaintenancePrioritiesComponent,
    MaintenancePrioritiesListComponent,
    MaintenancePrioritiesDetailComponent,
    MaintenancePrioritiesFormComponent
  ],
  imports: [
    CommonModule,
    MaintenancePrioritiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureTypeService,
    FailureTypeSharedService
  ]
})
export class MaintenancePrioritiesModule { }
