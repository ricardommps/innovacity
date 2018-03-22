import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[title-page]' // Attribute selector
})
export class TitlePageDirective {

  constructor(Element: ElementRef) {
  }

}
