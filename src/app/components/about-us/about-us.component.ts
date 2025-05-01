import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { AboutUsService } from './about-use.service';
import { Recipe } from '../../models/recipe.model';
import { SharedDataService } from '../../services/shared/shared-data.service';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignalShareService } from '../../services/signal-shared/signal-share.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css', encapsulation:ViewEncapsulation.ShadowDom
})
export class AboutUsComponent {


filterResults() {
throw new Error('Method not implemented.');
}

  firstName = signal('Kevin');
  recipeForm :FormGroup;
  title:FormControl;
  description: FormControl;

  city = "Nairobi";
  message: string;
  about = inject(AboutUsService);


  sharedDataService = inject(SharedDataService);

  signalSharedService  = inject(SignalShareService);
  router = inject(Router);

  selectedRecipe$ = this.sharedDataService.selectedRecipe$;

  selectedRecipes = this.signalSharedService.selectedRecipe;


  service = inject(AboutUsService);

  recipes$ = this.service.recipes$;

  recipes = this.service.recipeCollection;

  recipesFilter = this.service.filterRecipe;

  filteredRecipes = computed( ()=> {
    const filterTitle =
     this.recipesFilter()?.title?.toLowerCase() ?? '';
     return this.recipes().filter( recipe =>
      recipe.title?.toLocaleLowerCase()
      .includes(filterTitle));
  })

  recipesAsSignal  = toSignal(this.recipes$, {initialValue: [] as Recipe []});


  constructor(fb:FormBuilder){
    this.title = new FormControl('',Validators.required);
    this.description = new FormControl('',Validators.required);
    this.recipeForm = fb.group({
      'title': this.title,
      'description': this.description
    })
    this.message = this.about.displayMessage();
    console.log(this.firstName());
  }


  editRecipe(recipe: Recipe){
    // this.sharedDataService.updateSelectedRecipe(recipe);
    this.signalSharedService.updateSelectedRecipe(recipe); //using signals
    this.router.navigate(['/details']);
  }


}
