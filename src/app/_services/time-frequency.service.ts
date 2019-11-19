import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TimeFrequency } from '../_models/time-frequency';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class TimeFrequencyService {

  baseUrl = environment.webApiURL + 'timefrequencies';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<TimeFrequency[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<TimeFrequency[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<TimeFrequency> {
    return this.http.get<TimeFrequency>(`${this.baseUrl}/${id}`);
  }

  create(obj: TimeFrequency): Observable<TimeFrequency> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<TimeFrequency>(this.baseUrl, obj);
  }

  update(obj: TimeFrequency): Observable<TimeFrequency> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<TimeFrequency>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<TimeFrequency> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<TimeFrequency>(`${this.baseUrl}/${id}`, { params });
  }
}
