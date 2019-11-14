import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { FailureImpactsListComponent } from '../components/failure-impacts/failure-impacts-list/failure-impacts-list.component';
import { FailureImpactsDetailComponent } from '../components/failure-impacts/failure-impacts-detail/failure-impacts-detail.component';
import { FailureImpactsFormComponent } from '../components/failure-impacts/failure-impacts-form/failure-impacts-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: FailureImpactsListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: FailureImpactsDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: FailureImpactsDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: FailureImpactsFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: FailureImpactsFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureImpactsRoutingModule { }
