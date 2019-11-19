import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { environment } from '../../environments/environment';
import { LoseChangesGuard } from '../_helpers/lose-changes.guard';

import { ProductionMachinesListComponent } from '../components/production-machines/production-machines-list/production-machines-list.component';
import { ProductionMachinesDetailComponent } from '../components/production-machines/production-machines-detail/production-machines-detail.component';
import { ProductionMachinesFormComponent } from '../components/production-machines/production-machines-form/production-machines-form.component';

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], data: { roles: environment.maintenanceRoles, breadcrumb: 'Lista' },
    children: [
      { path: '', component: ProductionMachinesListComponent, data: { breadcrumb: null } },
      { path: 'detail/:id', component: ProductionMachinesDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'delete/:id', component: ProductionMachinesDetailComponent, data: { breadcrumb: 'Eliminar' } },
      { path: 'create', component: ProductionMachinesFormComponent, data: { breadcrumb: 'Nuevo' }, canDeactivate: [LoseChangesGuard] },
      { path: 'edit/:id', component: ProductionMachinesFormComponent, data: { breadcrumb: 'Editar' }, canDeactivate: [LoseChangesGuard] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionMachinesRoutingModule { }
