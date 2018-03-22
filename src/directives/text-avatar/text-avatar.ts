import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ColorGenerator } from "./color-generator";

@Directive({
  selector: 'text-avatar',
  providers: [ColorGenerator]
})
export class TextAvatarDirective {

  constructor(private element: ElementRef, private colorGenerator: ColorGenerator) { }

  @Input() text: string;
  @Input() color: string;
  ngOnChanges(changes: SimpleChanges) {
    let text = changes['text'] ? changes['text'].currentValue : null;
    let color = changes['color'] ? changes['color'].currentValue : null;
    this.element.nativeElement.setAttribute("value", this.extractFirstCharacter(text));
    this.element.nativeElement.style.backgroundColor = this.backgroundColorHexString(color, text);
  }

  private extractFirstCharacter(text: string): string {
    if(text){
      var res = text.split(" ");
      if(res.length <= 1){
        var textStr = res[0] ? res[0].charAt(0).toLocaleUpperCase() : ''
      }else{
        var textStr = (res[0] ? res[0].charAt(0).toLocaleUpperCase() : '') + (res[1] ? res[1].charAt(0).toLocaleUpperCase() : "")
      }

      //var textStr = text.charAt(0).toLocaleUpperCase() + text.charAt(1).toLocaleUpperCase()
      return  textStr || '';
    }else{
      return  '';
    }

  }

  private backgroundColorHexString(color: string, text: string): string {
    return color || this.colorGenerator.getColor(this.extractFirstCharacter(text));
  }
}
