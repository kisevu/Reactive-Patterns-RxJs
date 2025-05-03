import { Component, computed, inject } from '@angular/core';

import { combineLatest, from, map, mergeMap, Observable } from 'rxjs';
import { BootstrapService } from './services/bootstrap.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Recipe } from './models/recipe.model';
import { FilterRecipeComponent } from "./filter/filter-recipe/filter-recipe.component";
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { NewRecipeComponent } from "./create/new-recipe/new-recipe.component";

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [
    AsyncPipe,
    FilterRecipeComponent,
    CommonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule, FormsModule],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.css'
})
export class BootstrapComponent {


  bootstrapService = inject(BootstrapService);

  recipes$ = this.bootstrapService.recipes$

  filterRecipeActions$ =  this.bootstrapService.filterRecipesAction$;

  filteredRecipes$ = combineLatest([
    this.recipes$,
    this.filterRecipeActions$
  ]).pipe(
    map(([recipes, filter]: [Recipe[], Recipe]) => {
      const filterTitle = filter?.title?.toLowerCase() ?? '';
      const filterCategory = filter?.category?.toLowerCase() ?? '';
      return recipes.filter(recipe =>
        recipe.title?.toLowerCase().includes(filterTitle) && recipe.category?.toLowerCase().includes(filterCategory)
      );
    })
  );

  /* signal version of the filter solution */



  signalRecipes =  this.bootstrapService.recipesSignal;
  recipesFilter = this.bootstrapService.filteRecipeSignal;


  filteredSignalRecipes =computed( ()=> {
    const filterTitle = this.recipesFilter()?.title?.toLowerCase() ?? '';
    const filterCategory = this.recipesFilter()?.category?.toLowerCase() ?? '';
    return this.signalRecipes().filter(recipe => recipe.title?.toLowerCase().includes(filterTitle) &&
    recipe.category?.toLowerCase().includes(filterCategory)
    );
  })

   constructor(){
   }
}
