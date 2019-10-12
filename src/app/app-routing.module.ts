import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { FailureTypeComponent } from './components/failuretype/failuretype.component';
import { RoleName } from './_models/rolename.enum';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'failuretype', component: FailureTypeComponent, canActivate: [AuthGuard],
    data: { roles: [RoleName.MaintenanceAdmin, RoleName.MaintenanceManager, RoleName.MaintenanceEmployee]} },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
