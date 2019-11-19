import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { MaintenanceTypesListComponent } from '../components/maintenance-types/maintenance-types-list/maintenance-types-list.component';
import { MaintenanceTypesDetailComponent } from '../components/maintenance-types/maintenance-types-detail/maintenance-types-detail.component';
import { MaintenanceTypesFormComponent } from '../components/maintenance-types/maintenance-types-form/maintenance-types-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: MaintenanceTypesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: MaintenanceTypesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: MaintenanceTypesDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: MaintenanceTypesFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: MaintenanceTypesFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceTypesRoutingModule { }
