import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { FailureCausesListComponent } from '../components/failure-causes/failure-causes-list/failure-causes-list.component';
import { FailureCausesDetailComponent } from '../components/failure-causes/failure-causes-detail/failure-causes-detail.component';
import { FailureCausesFormComponent } from '../components/failure-causes/failure-causes-form/failure-causes-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: FailureCausesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: FailureCausesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: FailureCausesDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: FailureCausesFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: FailureCausesFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureCausesRoutingModule { }
