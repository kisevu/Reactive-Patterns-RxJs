import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { BootstrapService } from '../../services/bootstrap.service';
import { catchError, concatMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css'
})
export class NewRecipeComponent{


  constructor(private readonly fb: FormBuilder, private readonly bootstrapService: BootstrapService){
  }

  newRecipeForm = this.fb.group<Recipe>({
    id: Math.floor(1000 + Math.random() * 9000),
    title: '',
    description: '',
    numberOfPeople: 0,
    time: undefined,
    category: ''
  });


  valueChanges$ =  this.newRecipeForm.valueChanges.pipe(
    concatMap( formValue => this.bootstrapService.saveRecipe(<Recipe> formValue)),
    catchError( errors => of(errors)),
    tap(result => this.saveSuccess(result))
  );

  saveSuccess(_result: Recipe) {
    console.log('Saved successfully');
  }




}
