import { Component } from '@angular/core';
import { Navigation } from '../../models/navigation.model';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-navigation-list',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './navigation-list.component.html',
  styleUrl: './navigation-list.component.css'
})
export class NavigationListComponent {

  navigationList: Array<Navigation>;

  constructor(){
    this.navigationList = [
      new Navigation("","master"),
      new Navigation("Home","home"),
      new Navigation("About Us","about"),
      new Navigation("Contact Us","contact"),
      new Navigation("Products","product"),
      new Navigation("Testimonials","testimonials"),
      new Navigation("Help","help"),
      new Navigation("music","music"),
      new Navigation("bootstrap","bootstrap"),
    ];
  }

  whenMenuClicked(value:string): void {
    console.log(`After clicking menu: ${value}`);
  }

}
