import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { Observable, Subject } from 'rxjs';
import { error } from 'jquery';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  /* unicasting  cold observables */

  observables$ = new Observable( observer => {
    observer.next(Math.random());
    observer.next(Math.random());
  })


  /* multi-casting hot observables */

  value = Math.random();

  observables1$ = new Observable( observer => {
    observer.next(this.value);
    observer.next(this.value);
  })


  /* Types of subjects:

  * - Plainsubject - Subject();   - emission before subscription values get lost.
  * - ReplaySubject - ReplaySubject(); - no subscription worry, cuz value will be retried.
  * - BehaviorSubject - BehaviorSubject(); - no subscription worry but under condition that you will only get lastest emission.
  */





  ngOnInit(): void {
  }


}

