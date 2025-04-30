import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit{
  userName: string;

   http: HttpClient =inject(HttpClient);
   userService: UserService = inject(UserService);

  constructor(){
    this.userService.setUser(new User("kevin ameda kisevu",28,"software engineer"));
    this.userName =this.userService.getUser().name;
  }

  ngOnInit(): void {}

  signIn():void {
    console.log(` The name is : ${this.userName}`);
  }

}
