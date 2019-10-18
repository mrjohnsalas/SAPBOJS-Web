import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateRoute {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoseChangesGuard implements CanDeactivate<CanDeactivateRoute> {
  canDeactivate(component: CanDeactivateRoute) {
    return component.canExit ? component.canExit() : true;
  }
}
