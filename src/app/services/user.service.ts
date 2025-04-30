import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User;

  constructor(user: User) {
    this.user = user;
   }

   setUser(newUser:User ):void{
    this.user = newUser;
   }

   getUser(): User {
    return this.user;
   }
}
