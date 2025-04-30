import { Component,OnChanges, SimpleChange} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnChanges {



  myForm: FormGroup;
  name: FormControl;
  age: number;

  constructor(fb:FormBuilder){
    this.name = new FormControl('',Validators.required);
    this.age = 28;
    this.myForm = fb.group({
      'name':this.name
    });
  }



  ngOnChanges(changes: {[propName:string]: SimpleChange}): void {
    console.log('Changes',changes);
  }


  onSubmit(value:string) : void {
    console.log('You  have submitted: ',value);
  }


}
