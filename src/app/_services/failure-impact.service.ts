import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureImpact } from '../_models/failure-impact';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FailureImpactService {

  baseUrl = environment.webApiURL + 'failureimpacts';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<FailureImpact[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<FailureImpact[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<FailureImpact> {
    return this.http.get<FailureImpact>(`${this.baseUrl}/${id}`);
  }

  create(obj: FailureImpact): Observable<FailureImpact> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureImpact>(this.baseUrl, obj);
  }

  update(obj: FailureImpact): Observable<FailureImpact> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureImpact>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<FailureImpact> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureImpact>(`${this.baseUrl}/${id}`, { params });
  }
}
