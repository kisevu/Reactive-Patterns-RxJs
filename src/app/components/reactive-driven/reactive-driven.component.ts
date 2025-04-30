import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reactive-driven',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-driven.component.html',
  styleUrl: './reactive-driven.component.css'
})
export class ReactiveDrivenComponent {

myForm: FormGroup;
sku: FormControl;

constructor(fb:FormBuilder){
  this.sku = new FormControl();
  this.myForm = fb.group({
    'sku': this.sku
  });
}

onSubmit(value:string): void {
  console.log('You submitted value: ',value);
}

}
