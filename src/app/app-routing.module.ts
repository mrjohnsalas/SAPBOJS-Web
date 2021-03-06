import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'failuretypes', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/failure-types.module').then(module => module.FailureTypesModule)
  },
  {
    path: 'failurecauses', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/failure-causes.module').then(module => module.FailureCausesModule)
  },
  {
    path: 'failureimpacts', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/failure-impacts.module').then(module => module.FailureImpactsModule)
  },
  {
    path: 'failuremechanisms', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/failure-mechanisms.module').then(module => module.FailureMechanismsModule)
  },
  {
    path: 'failureseverities', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/failure-severities.module').then(module => module.FailureSeveritiesModule)
  },
  {
    path: 'jobs', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/jobs.module').then(module => module.JobsModule)
  },
  {
    path: 'maintenancepriorities', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/maintenance-priorities.module').then(module => module.MaintenancePrioritiesModule)
  },
  {
    path: 'maintenancetypes', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/maintenance-types.module').then(module => module.MaintenanceTypesModule)
  },
  {
    path: 'timefrequencies', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/time-frequencies.module').then(module => module.TimeFrequenciesModule)
  },
  {
    path: 'productionmachines', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/production-machines.module').then(module => module.ProductionMachinesModule)
  },
  {
    path: 'employees', canLoad: [AuthGuard], data: { roles: environment.maintenanceRoles },
    loadChildren: () => import('./_modules/employees.module').then(module => module.EmployeesModule)
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
