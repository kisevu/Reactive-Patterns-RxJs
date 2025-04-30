import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPopup]',
  standalone: true,
  exportAs: 'appPopup' /* making the directive available from elsewhere in the template */
})
export class PopupDirective {

  @Input() message!: string;

  constructor(_elementRef:ElementRef) {
    console.log(_elementRef);
  }

  /* listen to click events on the host */
  /* ng g directive ... */
  @HostListener('click') displayMesaage() : void {
    alert(`This is the message after click ${this.message}`);
  }

  /* Working as always */

  @HostListener('mouseover')  hoverMessage() : void {
    alert(`This is the message after hover ${this.message}`);
  }

}
