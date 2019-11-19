import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Job } from '../_models/job';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  baseUrl = environment.webApiURL + 'jobs';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<Job[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<Job[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/${id}`);
  }

  create(obj: Job): Observable<Job> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<Job>(this.baseUrl, obj);
  }

  update(obj: Job): Observable<Job> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<Job>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<Job> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<Job>(`${this.baseUrl}/${id}`, { params });
  }
}
