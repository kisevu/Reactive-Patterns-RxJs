import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Navigation } from '../../models/navigation.model';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent{

@Input() navigation!:Navigation;

@Output() clickedMenu : EventEmitter<string>;

constructor(){
  this.clickedMenu = new EventEmitter();
}

clickingMenuFunc(){
this.clickedMenu.emit(`${this.navigation.name}`);
}

}
