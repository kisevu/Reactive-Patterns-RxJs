import { Component, inject } from '@angular/core';
import { SharedDataService } from '../../services/shared/shared-data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {


  sharedDataService = inject(SharedDataService);

  selectedRecipe$ = this.sharedDataService.selectedRecipe$;



}
