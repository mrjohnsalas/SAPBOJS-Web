import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../_models/employee';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.webApiURL + 'employees';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<Employee[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<Employee[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  create(obj: Employee): Observable<Employee> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<Employee>(this.baseUrl, obj);
  }

  update(obj: Employee): Observable<Employee> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<Employee>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<Employee> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`, { params });
  }

  getSuperEmployees(): Observable<Employee[]> {
    const params = new HttpParams().set('onlysuperemployees', 'true');
    return this.http.get<Employee[]>(this.baseUrl, { params });
  }
}
