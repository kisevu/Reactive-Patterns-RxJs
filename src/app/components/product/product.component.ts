import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Product } from './product.model';
import { FormControl, FormGroup } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit{

  @Input() product!: Product;

  @Output() cardClicked : EventEmitter<string>;


  @HostBinding('attr.class') cssClass = 'bgColour';

  isBordered !:  boolean;
  id!: string;

  personInfo = new FormGroup({
   name: new FormControl('name'),
   age: new FormControl('Age'),
   dob: new FormControl('dob')
  });

  ngOnInit(): void {
      this.isBordered =true;
  }


  constructor(){
    this.cardClicked = new EventEmitter();
  }

  cardClicking() : void {
    this.cardClicked.emit(`${this.product.name}`);
  }



}
