import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeSharedService } from '../_services/employee-shared.service';
import { EmployeeService } from '../_services/employee.service';

import { EmployeesComponent } from '../components/employees/employees.component';
import { EmployeesListComponent } from '../components/employees/employees-list/employees-list.component';
import { EmployeesDetailComponent } from '../components/employees/employees-detail/employees-detail.component';
import { EmployeesFormComponent } from '../components/employees/employees-form/employees-form.component';
import { EmployeesSearchFormComponent } from '../components/employees/employees-search-form/employees-search-form.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesDetailComponent,
    EmployeesFormComponent,
    EmployeesSearchFormComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    EmployeeService,
    EmployeeSharedService
  ]
})
export class EmployeesModule { }
