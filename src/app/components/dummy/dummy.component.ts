import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent implements OnInit {

  /* Employing Reactive forms */

  myForm: FormGroup;
  name: FormControl;

  constructor(fb:FormBuilder){
    this.name = new FormControl();
    this.myForm = fb.group({
      'name': this.name
    });
  }



  ngOnInit(): void {
  }


  onSubmit(form:any):void {
    console.log('You have successfully submitted: ',form);
  }
}
