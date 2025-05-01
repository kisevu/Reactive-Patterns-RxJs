import { Component, inject, signal, OnInit, computed, effect } from '@angular/core';
import { SharedDataService } from '../../services/shared/shared-data.service';
import { AsyncPipe } from '@angular/common';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {


  sharedDataService = inject(SharedDataService);

  selectedRecipe$ = this.sharedDataService.selectedRecipe$;

  counter = signal(0);

   /* Creating signals  using constructor  function */

   name = signal<string>('Kevin');
   currencies = signal(['EURO','DOLLAR','JAPANESE YEN','STERLING']);
   recipes = signal<Recipe>({title:'tacos',description: 'American cuisine'});
   firstName = signal('Kevin');
   secondName = signal('Ameda');

   conjoined = computed( ()=> `${this.firstName()} ${this.secondName()}` );



   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recipes.set({title: 'Chapati',description: 'Kenyan dish'});
    this.name.update(data=>  "Name: "+ data);
    console.log(this.conjoined());
   }


   constructor(){
    effect(()=> {
      console.log('The updated value is ', this.counter());
    });
   }


   update() {
    this.counter.update((current)=> current + 1);
   }

}
