import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureCause } from '../_models/failure-cause';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FailureCauseService {

  baseUrl = environment.webApiURL + 'failuretypes';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(): Observable<FailureCause[]> {
    return this.http.get<FailureCause[]>(this.baseUrl);
  }

  get(id: number): Observable<FailureCause> {
    return this.http.get<FailureCause>(`${this.baseUrl}/${id}`);
  }

  create(failureCause: FailureCause): Observable<FailureCause> {
    failureCause.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureCause>(this.baseUrl, failureCause);
  }

  update(failureCause: FailureCause): Observable<FailureCause> {
    failureCause.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureCause>(`${this.baseUrl}/${failureCause.id}`, failureCause);
  }

  delete(id: number): Observable<FailureCause> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureCause>(`${this.baseUrl}/${id}`, { params });
  }
}
