import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { AboutUsService } from './about-use.service';
import { Recipe } from '../../models/recipe.model';
import { SharedDataService } from '../../services/shared/shared-data.service';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css', encapsulation:ViewEncapsulation.ShadowDom
})
export class AboutUsComponent {

  firstName = signal('Kevin');

  city = "Nairobi";
  message: string;
  private about = inject(AboutUsService);


  sharedDataService = inject(SharedDataService);
  router = inject(Router);

  selectedRecipe$ = this.sharedDataService.selectedRecipe$;

  recipes: Recipe [] = [];


  recipes$ = of(this.recipes);

  recipesAsSignal  = toSignal(this.recipes$, {initialValue: [] as Recipe []});



  constructor(){
    this.message = this.about.displayMessage();
    console.log(this.firstName());

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


  editRecipe(recipe: Recipe){
    this.sharedDataService.updateSelectedRecipe(recipe);
    this.router.navigate(['/details']);
  }


}
