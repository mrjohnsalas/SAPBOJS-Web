import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { FailureImpactsRoutingModule } from './failure-impacts-routing.module';
import { FailureImpactSharedService } from '../_services/failure-impact-shared.service';
import { FailureImpactService } from '../_services/failure-impact.service';

import { FailureImpactsComponent } from '../components/failure-impacts/failure-impacts.component';
import { FailureImpactsListComponent } from '../components/failure-impacts/failure-impacts-list/failure-impacts-list.component';
import { FailureImpactsDetailComponent } from '../components/failure-impacts/failure-impacts-detail/failure-impacts-detail.component';
import { FailureImpactsFormComponent } from '../components/failure-impacts/failure-impacts-form/failure-impacts-form.component';

@NgModule({
  declarations: [
    FailureImpactsComponent,
    FailureImpactsListComponent,
    FailureImpactsDetailComponent,
    FailureImpactsFormComponent
  ],
  imports: [
    CommonModule,
    FailureImpactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureImpactService,
    FailureImpactSharedService
  ]
})
export class FailureImpactsModule { }
