import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { JobsListComponent } from '../components/jobs/jobs-list/jobs-list.component';
import { JobsDetailComponent } from '../components/jobs/jobs-detail/jobs-detail.component';
import { JobsFormComponent } from '../components/jobs/jobs-form/jobs-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: JobsListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: JobsDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: JobsDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: JobsFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: JobsFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
