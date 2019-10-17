import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticationService.checkExpiredToken();
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {

      if (route.data.roles) {
        if (!currentUser.roles) {
          this.goHome();
        }

        let roleFound = false;
        currentUser.roles.forEach((role) => {
          if (route.data.roles.indexOf(role) !== -1) {
            roleFound = true;
          }
        });

        if (!roleFound) {
          this.goHome();
        }
      }
      
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  goHome() {
    this.router.navigate(['/']);
    return false;
  }
}
