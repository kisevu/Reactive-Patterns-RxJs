import { Component, inject } from '@angular/core';
import { Testimony } from '../../models/testimony.model';
import { TestimonyComponent } from '../testimony/testimony.component';
import { BulkService } from './bulk-operations/services/bulk.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonyComponent,AsyncPipe],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  testimonials: Testimony [];

  bulkService = inject(BulkService);

  images$ = this.bulkService.images$;

  message: string;

  constructor(){
    this.testimonials = [
      new Testimony('Frontier Energy',`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Ex corrupti distinctio tempora beatae itaque sit in reprehenderit molestiae unde
    ad architecto illo dignissimos, debitis aperiam asperiores, quas consequuntur minima tempore?`,'Carol Amolo'),

    new Testimony('Ascent Africa',`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Ex corrupti distinctio tempora beatae itaque sit in reprehenderit molestiae unde
    ad architecto illo dignissimos, debitis aperiam asperiores, quas consequuntur minima tempore?`,'Wanjira Mwaniki'),

    new Testimony('Serengeti Energy',`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Ex corrupti distinctio tempora beatae itaque sit in reprehenderit molestiae unde
    ad architecto illo dignissimos, debitis aperiam asperiores, quas consequuntur minima tempore?`, 'Rukia'),
    ];
    this.message = '';
  }

}
