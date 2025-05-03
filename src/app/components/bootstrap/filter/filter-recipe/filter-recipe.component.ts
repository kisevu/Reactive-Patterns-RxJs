import { Component} from '@angular/core';
import { BootstrapService } from '../../services/bootstrap.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-filter-recipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-recipe.component.html',
  styleUrl: './filter-recipe.component.css'
})
export class FilterRecipeComponent {

   constructor(private readonly bootstrapService:BootstrapService, private readonly fb: FormBuilder){}


   recipeForm = this.fb.group<Recipe>({
    title: '',
    description: '',
    numberOfPeople: undefined,
    time: undefined
  });


  filterResults() {
    this.bootstrapService.updateFilter(<Recipe>this.recipeForm.value);
  }


  clearFilters() {
  this.recipeForm.reset();
  window.location.reload();
   }


}
