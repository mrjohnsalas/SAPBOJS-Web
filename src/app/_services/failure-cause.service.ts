import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureCause } from '../_models/failure-cause';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FailureCauseService {

  baseUrl = environment.webApiURL + 'failurecauses';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<FailureCause[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<FailureCause[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<FailureCause> {
    return this.http.get<FailureCause>(`${this.baseUrl}/${id}`);
  }

  create(obj: FailureCause): Observable<FailureCause> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureCause>(this.baseUrl, obj);
  }

  update(obj: FailureCause): Observable<FailureCause> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureCause>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<FailureCause> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureCause>(`${this.baseUrl}/${id}`, { params });
  }
}
