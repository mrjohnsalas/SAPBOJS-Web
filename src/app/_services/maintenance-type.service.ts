import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MaintenanceType } from '../_models/maintenance-type';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceTypeService {

  baseUrl = environment.webApiURL + 'maintenancetypes';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<MaintenanceType[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<MaintenanceType[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<MaintenanceType> {
    return this.http.get<MaintenanceType>(`${this.baseUrl}/${id}`);
  }

  create(obj: MaintenanceType): Observable<MaintenanceType> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<MaintenanceType>(this.baseUrl, obj);
  }

  update(obj: MaintenanceType): Observable<MaintenanceType> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<MaintenanceType>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<MaintenanceType> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<MaintenanceType>(`${this.baseUrl}/${id}`, { params });
  }
}
