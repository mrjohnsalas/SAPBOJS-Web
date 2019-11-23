import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { EmployeesListComponent } from '../components/employees/employees-list/employees-list.component';
import { EmployeesDetailComponent } from '../components/employees/employees-detail/employees-detail.component';
import { EmployeesFormComponent } from '../components/employees/employees-form/employees-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: EmployeesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: EmployeesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: EmployeesDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: EmployeesFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: EmployeesFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
