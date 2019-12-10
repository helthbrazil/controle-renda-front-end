import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[rendaPadding]'
})
export class PaddingDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.paddingTop = '100px';
   }

}
