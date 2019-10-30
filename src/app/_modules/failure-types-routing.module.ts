import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { FailureTypesListComponent } from '../components/failure-types/failure-types-list/failure-types-list.component';
import { FailureTypesDetailComponent } from '../components/failure-types/failure-types-detail/failure-types-detail.component';
import { environment } from '../../environments/environment';
import { FailureTypesFormComponent } from '../components/failure-types/failure-types-form/failure-types-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: FailureTypesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: FailureTypesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'create', component: FailureTypesFormComponent, data: { breadcrumb: 'Nuevo' } },
      { path: 'edit/:id', component: FailureTypesFormComponent, data: { breadcrumb: 'Editar' } } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureTypesRoutingModule { }
