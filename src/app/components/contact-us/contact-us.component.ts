import { Component,Input, OnInit, ViewEncapsulation} from '@angular/core';
import { PopupDirective } from '../../directives/popup.directive';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [PopupDirective, ContactComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css', encapsulation: ViewEncapsulation.ShadowDom
})

export class ContactUsComponent  implements OnInit{

  @Input() header!: string;


  ngOnInit(): void {
    console.log('header',this.header);
  }



}
