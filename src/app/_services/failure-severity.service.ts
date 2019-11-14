import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureSeverity } from '../_models/failure-severity';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FailureSeverityService {

  baseUrl = environment.webApiURL + 'failureseverities';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(): Observable<FailureSeverity[]> {
    return this.http.get<FailureSeverity[]>(this.baseUrl);
  }

  get(id: number): Observable<FailureSeverity> {
    return this.http.get<FailureSeverity>(`${this.baseUrl}/${id}`);
  }

  create(failureSeverity: FailureSeverity): Observable<FailureSeverity> {
    failureSeverity.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureSeverity>(this.baseUrl, failureSeverity);
  }

  update(failureSeverity: FailureSeverity): Observable<FailureSeverity> {
    failureSeverity.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureSeverity>(`${this.baseUrl}/${failureSeverity.id}`, failureSeverity);
  }

  delete(id: number): Observable<FailureSeverity> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureSeverity>(`${this.baseUrl}/${id}`, { params });
  }
}
