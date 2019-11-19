import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MaintenancePriority } from '../_models/maintenance-priority';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class MaintenancePriorityService {

  baseUrl = environment.webApiURL + 'maintenancepriorities';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<MaintenancePriority[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<MaintenancePriority[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<MaintenancePriority> {
    return this.http.get<MaintenancePriority>(`${this.baseUrl}/${id}`);
  }

  create(obj: MaintenancePriority): Observable<MaintenancePriority> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<MaintenancePriority>(this.baseUrl, obj);
  }

  update(obj: MaintenancePriority): Observable<MaintenancePriority> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<MaintenancePriority>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<MaintenancePriority> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<MaintenancePriority>(`${this.baseUrl}/${id}`, { params });
  }
}
