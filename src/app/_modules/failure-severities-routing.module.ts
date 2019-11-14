import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { FailureSeveritiesListComponent } from '../components/failure-severities/failure-severities-list/failure-severities-list.component';
import { FailureSeveritiesDetailComponent } from '../components/failure-severities/failure-severities-detail/failure-severities-detail.component';
import { FailureSeveritiesFormComponent } from '../components/failure-severities/failure-severities-form/failure-severities-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: FailureSeveritiesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: FailureSeveritiesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: FailureSeveritiesDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: FailureSeveritiesFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: FailureSeveritiesFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureSeveritiesRoutingModule { }
