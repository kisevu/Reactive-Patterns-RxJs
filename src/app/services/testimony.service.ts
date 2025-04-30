import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Testimony } from '../models/testimony.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  currentTestimony: Subject<Testimony> =  new BehaviorSubject<Testimony>(new Testimony("","",""));

  constructor() { }

  public setCurrentTestimony(newTestimony: Testimony): void {
    this.currentTestimony.next(newTestimony);
  }

}
