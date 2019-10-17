import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RoleName } from '../_models/rolename.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl = environment.webApiURL + 'accounts/';

  isAdmin = false;
  isSalesUser = false;
  isCreditUser = false;
  isLogisticsUser = false;
  isMaintenanceUser = false;
  isProductionUser = false;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.setRoles();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  setRoles() {
    this.isAdmin = false;
    this.isSalesUser = false;
    this.isCreditUser = false;
    this.isLogisticsUser = false;
    this.isMaintenanceUser = false;
    this.isProductionUser = false;

    if (this.currentUserValue && this.currentUserValue.roles) {
      if (this.currentUserValue.roles.findIndex(role => role.name === RoleName.Admin) !== -1) {
        this.isAdmin = true;
      }

      if (this.currentUserValue.roles.find(role =>
        role.name === RoleName.SalesAdmin ||
        role.name === RoleName.SalesManager ||
        role.name === RoleName.SalesEmployee) !== undefined) {
        this.isSalesUser = true;
      }

      if (this.currentUserValue.roles.find(role =>
        role.name === RoleName.CreditAdmin ||
        role.name === RoleName.CreditManager ||
        role.name === RoleName.CreditEmployee) !== undefined) {
        this.isCreditUser = true;
      }

      if (this.currentUserValue.roles.find(role =>
        role.name === RoleName.LogisticsAdmin ||
        role.name === RoleName.LogisticsManager ||
        role.name === RoleName.LogisticsEmployee) !== undefined) {
        this.isLogisticsUser = true;
      }

      if (this.currentUserValue.roles.find(role =>
        role.name === RoleName.MaintenanceAdmin ||
        role.name === RoleName.MaintenanceManager ||
        role.name === RoleName.MaintenanceEmployee) !== undefined) {
        this.isMaintenanceUser = true;
      }

      if (this.currentUserValue.roles.find(role =>
        role.name === RoleName.ProductionAdmin ||
        role.name === RoleName.ProductionManager ||
        role.name === RoleName.ProductionEmployee) !== undefined) {
        this.isProductionUser = true;
      }
    }
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${this.baseUrl}login`, { email, password })
        .pipe(map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.setRoles();
          }
          return user;
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  checkExpiredToken() {
    if (this.currentUserValue) {
      const now = new Date().getTime();
      if (now >= new Date(this.currentUserValue.token.expiration).getTime()) {
        this.logout();
      }
    }
  }
}

