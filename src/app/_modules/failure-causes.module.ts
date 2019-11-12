import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { FailureCausesRoutingModule } from './failure-causes-routing.module';
import { FailureCauseSharedService } from '../_services/failure-cause-shared.service';
import { FailureCauseService } from '../_services/failure-cause.service';

import { FailureCausesComponent } from '../components/failure-causes/failure-causes.component';
import { FailureCausesListComponent } from '../components/failure-causes/failure-causes-list/failure-causes-list.component';
import { FailureCausesDetailComponent } from '../components/failure-causes/failure-causes-detail/failure-causes-detail.component';
import { FailureCausesFormComponent } from '../components/failure-causes/failure-causes-form/failure-causes-form.component';

@NgModule({
  declarations: [
    FailureCausesComponent,
    FailureCausesListComponent,
    FailureCausesDetailComponent,
    FailureCausesFormComponent
  ],
  imports: [
    CommonModule,
    FailureCausesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureCauseService,
    FailureCauseSharedService
  ]
})
export class FailureCausesModule { }
