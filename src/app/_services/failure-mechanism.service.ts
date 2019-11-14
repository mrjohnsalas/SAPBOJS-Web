import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureMechanism } from '../_models/failure-mechanism';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FailureMechanismService {

  baseUrl = environment.webApiURL + 'failuremechanisms';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(): Observable<FailureMechanism[]> {
    return this.http.get<FailureMechanism[]>(this.baseUrl);
  }

  get(id: number): Observable<FailureMechanism> {
    return this.http.get<FailureMechanism>(`${this.baseUrl}/${id}`);
  }

  create(failureMechanism: FailureMechanism): Observable<FailureMechanism> {
    failureMechanism.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureMechanism>(this.baseUrl, failureMechanism);
  }

  update(failureMechanism: FailureMechanism): Observable<FailureMechanism> {
    failureMechanism.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureMechanism>(`${this.baseUrl}/${failureMechanism.id}`, failureMechanism);
  }

  delete(id: number): Observable<FailureMechanism> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureMechanism>(`${this.baseUrl}/${id}`, { params });
  }
}
