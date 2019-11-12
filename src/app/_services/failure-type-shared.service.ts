import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FailureTypeSharedService {

    ids: number[];
    private sendIdsSubject = new Subject<number[]>();
    sendIdsObservable = this.sendIdsSubject.asObservable();

    sendIds(ids: number[]) {
        this.ids = ids;
        this.sendIdsSubject.next(ids);
    }

}