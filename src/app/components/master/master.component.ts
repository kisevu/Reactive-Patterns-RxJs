import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationListComponent } from '../navigation-list/navigation-list.component';
// import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RouterOutlet, NavigationListComponent],

  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
