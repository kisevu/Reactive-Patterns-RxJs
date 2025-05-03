import { Component, computed} from '@angular/core';
import { BootstrapService } from '../../services/bootstrap.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-filter-recipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-recipe.component.html',
  styleUrl: './filter-recipe.component.css'
})
export class FilterRecipeComponent {


   constructor(private readonly bootstrapService:BootstrapService, private readonly fb: FormBuilder,
    private readonly router:Router
   ){}


   recipeForm = this.fb.group<Recipe>({
    title: '',
    description: '',
    numberOfPeople: undefined,
    time: undefined,
    category: ''
  });


  /* using observables */
  filterResults() {
    this.bootstrapService.updateFilter(<Recipe>this.recipeForm.value);
  }


  /* using observables */

  clearFilters() {
  this.recipeForm.reset();
  window.location.reload();
   }

   /* using signals */
   filterResultsSignal(){
    this.bootstrapService.updateFilterSignal(<Recipe>this.recipeForm.value);
   }


   /* using signals */
   clearFiltersSignal(){
    this.recipeForm.reset();
    window.location.reload();
   }


   saveRecipe() {
    this.router.navigate(['/new-recipe'])
    }




}
