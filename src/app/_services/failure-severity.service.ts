import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureSeverity } from '../_models/failure-severity';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FailureSeverityService {

  baseUrl = environment.webApiURL + 'failureseverities';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<FailureSeverity[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<FailureSeverity[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<FailureSeverity> {
    return this.http.get<FailureSeverity>(`${this.baseUrl}/${id}`);
  }

  create(obj: FailureSeverity): Observable<FailureSeverity> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureSeverity>(this.baseUrl, obj);
  }

  update(obj: FailureSeverity): Observable<FailureSeverity> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureSeverity>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<FailureSeverity> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureSeverity>(`${this.baseUrl}/${id}`, { params });
  }
}
