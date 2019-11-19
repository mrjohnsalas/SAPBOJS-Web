import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { JobsRoutingModule } from './jobs-routing.module';
import { FailureTypeSharedService } from '../_services/failure-type-shared.service';
import { FailureTypeService } from '../_services/failure-type.service';

import { JobsComponent } from '../components/jobs/jobs.component';
import { JobsListComponent } from '../components/jobs/jobs-list/jobs-list.component';
import { JobsDetailComponent } from '../components/jobs/jobs-detail/jobs-detail.component';
import { JobsFormComponent } from '../components/jobs/jobs-form/jobs-form.component';

@NgModule({
  declarations: [
    JobsComponent,
    JobsListComponent,
    JobsDetailComponent,
    JobsFormComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureTypeService,
    FailureTypeSharedService
  ]
})
export class JobsModule { }
