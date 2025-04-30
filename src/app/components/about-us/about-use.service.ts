
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AboutUsService{

  displayMessage(): string{
    return `God shall make a way, where there's no way. Always remember that.`;
  }
}
