import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { FailureSeveritiesRoutingModule } from './failure-severities-routing.module';
import { FailureSeveritySharedService } from '../_services/failure-severity-shared.service';
import { FailureSeverityService } from '../_services/failure-severity.service';

import { FailureSeveritiesComponent } from '../components/failure-severities/failure-severities.component';
import { FailureSeveritiesListComponent } from '../components/failure-severities/failure-severities-list/failure-severities-list.component';
import { FailureSeveritiesDetailComponent } from '../components/failure-severities/failure-severities-detail/failure-severities-detail.component';
import { FailureSeveritiesFormComponent } from '../components/failure-severities/failure-severities-form/failure-severities-form.component';

@NgModule({
  declarations: [
    FailureSeveritiesComponent,
    FailureSeveritiesListComponent,
    FailureSeveritiesDetailComponent,
    FailureSeveritiesFormComponent
  ],
  imports: [
    CommonModule,
    FailureSeveritiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureSeverityService,
    FailureSeveritySharedService
  ]
})
export class FailureSeveritiesModule { }
