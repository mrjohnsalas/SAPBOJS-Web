import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductionMachine } from '../_models/production-machine';
import { AuthenticationService } from './authentication.service';
import { StatusType } from '../_models/status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductionMachineService {

  baseUrl = environment.webApiURL + 'productionmachines';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAll(statusId = StatusType.Todos): Observable<ProductionMachine[]> {
    const params = new HttpParams().set('statusType', statusId.toString());
    return this.http.get<ProductionMachine[]>(this.baseUrl, { params });
  }

  get(id: number): Observable<ProductionMachine> {
    return this.http.get<ProductionMachine>(`${this.baseUrl}/${id}`);
  }

  create(obj: ProductionMachine): Observable<ProductionMachine> {
    obj.createdBy = this.authenticationService.currentUserValue.email;
    return this.http.post<ProductionMachine>(this.baseUrl, obj);
  }

  update(obj: ProductionMachine): Observable<ProductionMachine> {
    obj.updatedBy = this.authenticationService.currentUserValue.email;
    return this.http.put<ProductionMachine>(`${this.baseUrl}/${obj.id}`, obj);
  }

  delete(id: number): Observable<ProductionMachine> {
    const params = new HttpParams().set('deleteBy', this.authenticationService.currentUserValue.email);
    return this.http.delete<ProductionMachine>(`${this.baseUrl}/${id}`, { params });
  }
}
