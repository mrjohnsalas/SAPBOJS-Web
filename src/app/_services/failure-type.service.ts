import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FailureType } from '../_models/failure-type';

@Injectable({
  providedIn: 'root'
})
export class FailureTypeService {

  baseUrl = environment.webApiURL + 'failuretypes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<FailureType[]> {
    return this.http.get<FailureType[]>(this.baseUrl);
  }

  get(id: number): Observable<FailureType> {
    return this.http.get<FailureType>(`${this.baseUrl}/${id}`);
  }

  create(failureType: FailureType): Observable<FailureType> {
    return this.http.post<FailureType>(this.baseUrl, failureType);
  }

  update(failureType: FailureType): Observable<FailureType> {
    return this.http.put<FailureType>(`${this.baseUrl}/${failureType.id}`, failureType);
  }

  delete(id: number): Observable<FailureType> {
    return this.http.delete<FailureType>(`${this.baseUrl}/${id}`);
  }
}
