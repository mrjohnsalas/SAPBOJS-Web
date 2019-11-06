import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureType } from '../_models/failure-type';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FailureTypeService {

  baseUrl = environment.webApiURL + 'failuretypes';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(): Observable<FailureType[]> {
    return this.http.get<FailureType[]>(this.baseUrl);
  }

  get(id: number): Observable<FailureType> {
    return this.http.get<FailureType>(`${this.baseUrl}/${id}`);
  }

  create(failureType: FailureType): Observable<FailureType> {
    failureType.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<FailureType>(this.baseUrl, failureType);
  }

  update(failureType: FailureType): Observable<FailureType> {
    failureType.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<FailureType>(`${this.baseUrl}/${failureType.id}`, failureType);
  }

  delete(id: number): Observable<FailureType> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<FailureType>(`${this.baseUrl}/${id}`, { params });
  }
}
