import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { FailureMechanismsListComponent } from '../components/failure-mechanisms/failure-mechanisms-list/failure-mechanisms-list.component';
import { FailureMechanismsDetailComponent } from '../components/failure-mechanisms/failure-mechanisms-detail/failure-mechanisms-detail.component';
import { FailureMechanismsFormComponent } from '../components/failure-mechanisms/failure-mechanisms-form/failure-mechanisms-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: FailureMechanismsListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: FailureMechanismsDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: FailureMechanismsDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: FailureMechanismsFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: FailureMechanismsFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureMechanismsRoutingModule { }
