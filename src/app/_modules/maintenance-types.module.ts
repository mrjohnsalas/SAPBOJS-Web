import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { MaintenanceTypesRoutingModule } from './maintenance-types-routing.module';
import { MaintenanceTypeSharedService } from '../_services/maintenance-type-shared.service';
import { MaintenanceTypeService } from '../_services/maintenance-type.service';

import { MaintenanceTypesComponent } from '../components/maintenance-types/maintenance-types.component';
import { MaintenanceTypesListComponent } from '../components/maintenance-types/maintenance-types-list/maintenance-types-list.component';
import { MaintenanceTypesDetailComponent } from '../components/maintenance-types/maintenance-types-detail/maintenance-types-detail.component';
import { MaintenanceTypesFormComponent } from '../components/maintenance-types/maintenance-types-form/maintenance-types-form.component';

@NgModule({
  declarations: [
    MaintenanceTypesComponent,
    MaintenanceTypesListComponent,
    MaintenanceTypesDetailComponent,
    MaintenanceTypesFormComponent
  ],
  imports: [
    CommonModule,
    MaintenanceTypesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    MaintenanceTypeService,
    MaintenanceTypeSharedService
  ]
})
export class MaintenanceTypesModule { }
