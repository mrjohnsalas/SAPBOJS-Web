import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { FailureTypesListComponent } from '../components/failure-types/failure-types-list/failure-types-list.component';
import { FailureTypesDetailComponent } from '../components/failure-types/failure-types-detail/failure-types-detail.component';
import { environment } from '../../environments/environment';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles },
    children: [
      { path: '', component: FailureTypesListComponent, data: { breadcrumb: 'Lista' } },
      { path: ':id', component: FailureTypesDetailComponent, data: { breadcrumb: 'Detalle' } } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureTypesRoutingModule { }
