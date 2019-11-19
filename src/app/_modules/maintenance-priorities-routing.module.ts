import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { MaintenancePrioritiesListComponent } from '../components/maintenance-priorities/maintenance-priorities-list/maintenance-priorities-list.component';
import { MaintenancePrioritiesDetailComponent } from '../components/maintenance-priorities/maintenance-priorities-detail/maintenance-priorities-detail.component';
import { MaintenancePrioritiesFormComponent } from '../components/maintenance-priorities/maintenance-priorities-form/maintenance-priorities-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: MaintenancePrioritiesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: MaintenancePrioritiesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: MaintenancePrioritiesDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: MaintenancePrioritiesFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: MaintenancePrioritiesFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancePrioritiesRoutingModule { }
