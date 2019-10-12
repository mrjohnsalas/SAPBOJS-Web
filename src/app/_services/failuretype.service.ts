import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FailureType } from '../_models/failuretype';

@Injectable({
  providedIn: 'root'
})
export class FailureTypeService {

  baseUrl = environment.webApiURL + 'failuretypes/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<FailureType[]>(this.baseUrl);
  }
}
