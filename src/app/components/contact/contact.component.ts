import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  @Input() header!: string;
  @HostBinding('style.backgroundColor') backgroundColor:string = "purple";
  @HostBinding('style.margin') margin: string;


  @HostBinding('attr.class') textColor = "textColor";

  @HostBinding('class') divcontainer = "div-container";
  @HostBinding('class') bgColor = "bgColor";

  constructor(){
    this.margin = "20px";
  }

  ngOnInit(): void {
  }


}
