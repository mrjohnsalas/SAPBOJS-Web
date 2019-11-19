import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { TimeFrequenciesRoutingModule } from './time-frequencies-routing.module';
import { FailureTypeSharedService } from '../_services/failure-type-shared.service';
import { FailureTypeService } from '../_services/failure-type.service';

import { TimeFrequenciesComponent } from '../components/time-frequencies/time-frequencies.component';
import { TimeFrequenciesListComponent } from '../components/time-frequencies/time-frequencies-list/time-frequencies-list.component';
import { TimeFrequenciesDetailComponent } from '../components/time-frequencies/time-frequencies-detail/time-frequencies-detail.component';
import { TimeFrequenciesFormComponent } from '../components/time-frequencies/time-frequencies-form/time-frequencies-form.component';

@NgModule({
  declarations: [
    TimeFrequenciesComponent,
    TimeFrequenciesListComponent,
    TimeFrequenciesDetailComponent,
    TimeFrequenciesFormComponent
  ],
  imports: [
    CommonModule,
    TimeFrequenciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureTypeService,
    FailureTypeSharedService
  ]
})
export class TimeFrequenciesModule { }
