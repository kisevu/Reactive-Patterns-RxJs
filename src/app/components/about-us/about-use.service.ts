
import { Injectable, signal } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root'
})
export class AboutUsService{

recipes: Recipe [] = [];


recipes$ = of(this.recipes);


constructor(){

  this.recipes.push({
    title: 'Usobuko',
    description: 'just beef'
  },
  {
    title: 'Pilau',
    description: 'swahili dish'
  },

  {
    title: 'chapati',
    description: 'swahili dish'
  }
);
}

  displayMessage(): string{
    return `God shall make a way, where there's no way. Always remember that.`;
  }



  /* Earlier on we used BehaviorSubject to do some filtering and that can be replaced by Signals as below */

  recipeCollection = toSignal(this.recipes$, { initialValue: [] as Recipe []});

  filterRecipe = signal({title: ''} as Recipe);

  updateFilter(criteria: Recipe ){
    this.filterRecipe.set(criteria);  // here initially we were notifying using behavior subject
  }

  //instead of combineLatest we will be using computed signal.




}


