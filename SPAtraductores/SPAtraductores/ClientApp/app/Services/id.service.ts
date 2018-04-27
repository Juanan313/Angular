import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IdService {

    private idSource = new BehaviorSubject<number>(0);
    currentId = this.idSource.asObservable();

    constructor() { }

    changeID(id: number) {
        this.idSource.next(id);
    }

}