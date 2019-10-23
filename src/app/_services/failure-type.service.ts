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

  getFailureTypes(): Observable<FailureType[]> {
    return this.http.get<FailureType[]>(this.baseUrl);
  }
}
