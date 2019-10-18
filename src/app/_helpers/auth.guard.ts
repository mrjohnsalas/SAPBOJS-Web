import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild,
  CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  checkAuth(route: any, returnUrl: string) {
    this.authenticationService.checkExpiredToken();
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if (route.data.roles) {
        if (!currentUser.roles) {
          this.goHome();
        }

        let roleFound = false;
        currentUser.roles.forEach((role) => {
          if (route.data.roles.indexOf(role.name) !== -1) {
            roleFound = true;
          }
        });

        if (!roleFound) {
          this.goHome();
        }
      }

      return true;
    }

    this.goLogin(returnUrl);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkAuth(route, state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.checkAuth(route, '');
  }

  goHome() {
    this.router.navigate(['/']);
    return false;
  }

  goLogin(returnUrl: string) {
    if (returnUrl) {
      this.router.navigate(['/login'], { queryParams: { returnUrl } });
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
