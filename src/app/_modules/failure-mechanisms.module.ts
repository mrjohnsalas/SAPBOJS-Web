import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { FailureMechanismsRoutingModule } from './failure-mechanisms-routing.module';
import { FailureMechanismSharedService } from '../_services/failure-mechanism-shared.service';
import { FailureMechanismService } from '../_services/failure-mechanism.service';

import { FailureMechanismsComponent } from '../components/failure-mechanisms/failure-mechanisms.component';
import { FailureMechanismsListComponent } from '../components/failure-mechanisms/failure-mechanisms-list/failure-mechanisms-list.component';
import { FailureMechanismsDetailComponent } from '../components/failure-mechanisms/failure-mechanisms-detail/failure-mechanisms-detail.component';
import { FailureMechanismsFormComponent } from '../components/failure-mechanisms/failure-mechanisms-form/failure-mechanisms-form.component';

@NgModule({
  declarations: [
    FailureMechanismsComponent,
    FailureMechanismsListComponent,
    FailureMechanismsDetailComponent,
    FailureMechanismsFormComponent
  ],
  imports: [
    CommonModule,
    FailureMechanismsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureMechanismService,
    FailureMechanismSharedService
  ]
})
export class FailureMechanismsModule { }
