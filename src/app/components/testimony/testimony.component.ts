import { Component,Input} from '@angular/core';
import { Testimony } from '../../models/testimony.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [NgClass],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css'
})
export class TestimonyComponent {

  ischangeContainerBg: boolean;
  ischangeTextToBlack: boolean;

  @Input()testimony!: Testimony;

  constructor(){
    this.ischangeContainerBg = true;
    this.ischangeTextToBlack = true;
  }



}
