import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureType } from '../_models/failure-type';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FailureTypeService {

  baseUrl = environment.webApiURL + 'failuretypes';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<FailureType[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<FailureType[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<FailureType> {
    return this.http.get<FailureType>(`${this.baseUrl}/${id}`);
  }

  create(obj: FailureType): Observable<FailureType> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureType>(this.baseUrl, obj);
  }

  update(obj: FailureType): Observable<FailureType> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureType>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<FailureType> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureType>(`${this.baseUrl}/${id}`, { params });
  }
}
