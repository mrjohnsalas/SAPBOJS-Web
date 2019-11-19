import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureMechanism } from '../_models/failure-mechanism';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FailureMechanismService {

  baseUrl = environment.webApiURL + 'failuremechanisms';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<FailureMechanism[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<FailureMechanism[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<FailureMechanism> {
    return this.http.get<FailureMechanism>(`${this.baseUrl}/${id}`);
  }

  create(obj: FailureMechanism): Observable<FailureMechanism> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureMechanism>(this.baseUrl, obj);
  }

  update(obj: FailureMechanism): Observable<FailureMechanism> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureMechanism>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<FailureMechanism> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureMechanism>(`${this.baseUrl}/${id}`, { params });
  }
}
