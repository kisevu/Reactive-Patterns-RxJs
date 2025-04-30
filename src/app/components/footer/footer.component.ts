import { Component } from '@angular/core';
import { NavigationListComponent } from "../navigation-list/navigation-list.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavigationListComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
