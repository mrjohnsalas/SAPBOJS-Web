import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureImpact } from '../_models/failure-impact';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FailureImpactService {

  baseUrl = environment.webApiURL + 'failureimpacts';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(): Observable<FailureImpact[]> {
    return this.http.get<FailureImpact[]>(this.baseUrl);
  }

  get(id: number): Observable<FailureImpact> {
    return this.http.get<FailureImpact>(`${this.baseUrl}/${id}`);
  }

  create(failureImpact: FailureImpact): Observable<FailureImpact> {
    failureImpact.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureImpact>(this.baseUrl, failureImpact);
  }

  update(failureImpact: FailureImpact): Observable<FailureImpact> {
    failureImpact.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureImpact>(`${this.baseUrl}/${failureImpact.id}`, failureImpact);
  }

  delete(id: number): Observable<FailureImpact> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureImpact>(`${this.baseUrl}/${id}`, { params });
  }
}
