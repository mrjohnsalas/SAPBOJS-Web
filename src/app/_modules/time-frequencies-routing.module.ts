import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { TimeFrequenciesListComponent } from '../components/time-frequencies/time-frequencies-list/time-frequencies-list.component';
import { TimeFrequenciesDetailComponent } from '../components/time-frequencies/time-frequencies-detail/time-frequencies-detail.component';
import { TimeFrequenciesFormComponent } from '../components/time-frequencies/time-frequencies-form/time-frequencies-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: TimeFrequenciesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: TimeFrequenciesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: TimeFrequenciesDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: TimeFrequenciesFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: TimeFrequenciesFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeFrequenciesRoutingModule { }
