import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { ProductionMachinesRoutingModule } from './production-machines-routing.module';
import { FailureTypeSharedService } from '../_services/failure-type-shared.service';
import { FailureTypeService } from '../_services/failure-type.service';

import { ProductionMachinesComponent } from '../components/production-machines/production-machines.component';
import { ProductionMachinesListComponent } from '../components/production-machines/production-machines-list/production-machines-list.component';
import { ProductionMachinesDetailComponent } from '../components/production-machines/production-machines-detail/production-machines-detail.component';
import { ProductionMachinesFormComponent } from '../components/production-machines/production-machines-form/production-machines-form.component';

@NgModule({
  declarations: [
    ProductionMachinesComponent,
    ProductionMachinesListComponent,
    ProductionMachinesDetailComponent,
    ProductionMachinesFormComponent
  ],
  imports: [
    CommonModule,
    ProductionMachinesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FailureTypeService,
    FailureTypeSharedService
  ]
})
export class ProductionMachinesModule { }
