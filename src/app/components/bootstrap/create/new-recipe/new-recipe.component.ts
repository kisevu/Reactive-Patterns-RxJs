import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { BootstrapService } from '../../services/bootstrap.service';
import { BehaviorSubject, catchError, concatMap, forkJoin, of, switchMap, tap, pipe } from 'rxjs';
import { BulkService } from '../../../testimonials/bulk-operations/services/bulk.service';

@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css'
})
export class NewRecipeComponent{
  bulkService = inject(BulkService);
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


  /*
   * concatMap = >  ensures operations are processed sequentially, each observable is processed (waits to complete)
   one at a time and in order. Using concatMap() is good to ensure that inner observable completes
   since concatMap() waits  for the completion of each inner Observable before subscribing to the next
   one in the sequence.

   * switchMap = > only focuses on the latest/ most recent data ,ensuring that only the latest  updates  are processed(cancels the incomplete)
    while cancelling any ongoing operations triggered by previous data. This one works like changing TV channels

   * mergeMap =>  does not wait for an observable to complete before subscribing  to the next  Observable. Subscribes(subscribes to inner observables at same time)
    to every inner Observable  at the same time and outputs the valus of combined  result.

  */


    uploadFilesSubject$ =  new BehaviorSubject<File[]>([]);
    uploadRecipeImages$ =   this.uploadFilesSubject$.pipe(
      switchMap( uploadedFiles => forkJoin(
        uploadedFiles.map((file:File) => 
        this.bulkService.upload(
          this.newRecipeForm.value.id,file)
          // .pipe(
          //   catchError(errors => of(errors))
          // )
        )))
    )

    onUpload(files:File[]) {
      this.uploadFilesSubject$.next(files);
    }



}
