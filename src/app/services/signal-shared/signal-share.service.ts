import { Injectable, signal } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SignalShareService {

  constructor() { }


  selectedRecipe = signal({} as Recipe);


  updateSelectedRecipe(recipe:Recipe){
    this.selectedRecipe.set(recipe);
  }
}
