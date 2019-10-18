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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
