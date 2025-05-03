import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  recipes: Recipe [] = [];
  recipes$: Observable<Recipe[]>;

  constructor() {
   this.recipes$ =  this.loadRecipes();
  }

  private  readonly filterRecipeSubject = new BehaviorSubject<Recipe>({title:'', category: ''});

  filterRecipesAction$ = this.filterRecipeSubject.asObservable();


  updateFilter(criteria: Recipe){
    this.filterRecipeSubject.next(criteria);
  }

  loadRecipes(): Observable<Recipe []> {
  return of(this.recipes = [
    {
      title: 'Pilau',
      description: `
      Take 3 cups of rice. Simmer.
      Prepare onions and let them brownen.
      Take the simmered rice and mix, you've got your Pilau
      `,
      numberOfPeople: 3,
      time: ' 10 minutes',
      category: 'starch'
    },

    {
      title: 'Chapati',
      description: `
      Take 1 kg of flour,
      make dough. Add a little bit of sugar to taste.
       Leave to rest. Take the dough and roll to make flat rounded tops and cook on
       pan with little bit of oil to make them appear as tortillers`,
      numberOfPeople: 5,
      time: '15 mins',
      category: 'starch'
    },
    {
      title: 'Oven roast Chicken',
      description: `
      Cut the chicken and portion into quarters.
      wash the chicken to remove wastes and bloody coatings.
      Marinate the chicken to taste. Add dark soy sauce to make the chicken appear golden brown when
      smoked.
      `,
      numberOfPeople: 4,
      time: '5 mins',
      category: 'protein'
    },

    {
      title: 'Saute Potatoes',
      description: `Chop the potatoes into
      wedge like structures.  Deep fry them  to make the cooked and moist.
      Toase onions and brownen them, sprinkle a little bit of corriander and herbs and leave them for
      2 mins. Toase the potatoes and the brownen onions and serve`,
      numberOfPeople: 3,
      time: '2 mins',
      category: 'starch'
    }

  ]);
  }


}
