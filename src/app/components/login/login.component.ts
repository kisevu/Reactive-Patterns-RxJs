import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  message: string;

  constructor(public authService: AuthService){
    this.message = ''
  }


  login(username: string, password: string) : boolean {
    this.message = '';
    if(!this.authService.login(username,password)) {
      this.message = 'Incorrect credentials';
      setTimeout(()=>{
        this.message = '';
      }.bind(this),2500);
    }
    return false;
  }

  logout():any {
    this.authService.logout();
    return false;
  }

}
