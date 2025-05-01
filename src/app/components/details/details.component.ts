import { Component, inject, signal, OnInit, computed, effect } from '@angular/core';
import { SharedDataService } from '../../services/shared/shared-data.service';
import { AsyncPipe } from '@angular/common';
import { Recipe } from '../../models/recipe.model';
import { BehaviorSubject, delay, of, tap } from 'rxjs';

import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {


  sharedDataService = inject(SharedDataService);

  selectedRecipe$ = this.sharedDataService.selectedRecipe$;

  counter = signal(0);



  values$ = of(10,20,30).pipe(delay(5));
  valuesAsSignal = toSignal(this.values$, { initialValue: 0 });
   /* Creating signals  using constructor  function */

   name = signal<string>('Kevin');
   currencies = signal(['EURO','DOLLAR','JAPANESE YEN','STERLING']);
   recipes = signal<Recipe>({title:'tacos',description: 'American cuisine'});
   firstName = signal('Kevin');
   secondName = signal('Ameda');

   conjoined = computed( ()=> `${this.firstName()} ${this.secondName()}` );



   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recipes.set({title: 'Chapati',description: 'Kenyan dish'});
    this.name.update(data=>  "Name: "+ data);
    console.log(this.conjoined());
   }


   constructor(){
    // effect(()=> {
    //   console.log('The updated value is ', this.counter());
    // });
      // effect( ()=> console.log(this.valuesAsSignal()) );

      this.value.asObservable().pipe(
        tap(x => console.log(`The value is: ${x}`))
      ).subscribe();

      this.value.next(20);
      this.value.next(30);

      toObservable(this.value2).pipe(
        tap(x=>console.log(`The value 2 is : ${x}`))
      ).subscribe();

      this.value2.set(20);
      this.value2.set(30);

   }


   update() {
    this.counter.update((current)=> current + 1);
   }


   value = new BehaviorSubject(10);

   value2 = signal(10);


   /*
   Both Signals and Observables are not mutually exclusive and we learn that they can be used together.
   We have @angular/core/rxjs-interop package which includes toSignal() and toObservable()
   toSignal() automatically subscribes to the defined Observable  and unsubscribes  when the component or service that calls toSignal()
   is destroyed.
   We do not manage subscriptions and this concept remind us of the asyncpipe with the only difference being,
   that async pipe is used with the Observables in templates but Signal is flexible and is available everywhere else.
   Signals, always has an initial value which reps an Signal value until the Observable is emitted.

   valueAsSignal = toSignal(this.value$, {initial})


   toObservable() -  allows to convert a Signal into an Observable.
   Whenever the signal value changes, Observable automatically  emits a notification with the new value.
   This allows to easily trigger  your async operation based on updated Signal data.
   toObservable() uses effects under the hood to track the Signal's value and emit the latest  value to the Observable

   toObservable() functions a little bit different from the asObservable() as  Signal change notifications and scheduled
   rather than  immediately processed , as Observable notificatioins are
   let's modifify the sample of value which uses asObservable()
   */

}
