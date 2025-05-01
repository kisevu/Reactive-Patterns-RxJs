import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private selectedRecipeSubject  = new BehaviorSubject<Recipe | undefined>(undefined); // private to be accessed here

  selectedRecipe$  = this.selectedRecipeSubject.asObservable(); // public Readonly


   updateSelectedRecipe(recipe: Recipe) {
    this.selectedRecipeSubject.next(recipe);
   }
}


/*
Data Sharing Reactive Pattern
------------------------------------------------
- Create an Angular Service that will be shared across components.
- Within this service, create a BehaviorSubject instance that will emit the shared data to subscribers
 ( remember to specify the type of data emitted by the BehaviorSubject and initialize value of the shared data).
 * Why use BehaviorSubject:
   * Allows us to broadcast shared data to multiple observers.
   * stores latest value emitted to its observers, and any new subscriber immediately receives  the last emitted value upon subscription.
   *
- Next, define a public Observable within the shared service to hold the readonly-shared value.
- implement and update method within the shared service to update the shared value by calling next method of the subject  type to
   emit the updated value to subscribers.
- Inject shared service in component responsible  for updating the value of the shared data and call the update method implemented in the
  service.
  - Inject shared service in the component that consumes the value  of the shared data and subscribe  to the exposed Observable in the
   service.


* N/B - checkout the usage of this context in the details component and about-us component.




   * In the above we have used observables, so let's see how to categorically use signals for sharing data between components


*/
