import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';


@Component({
  selector: 'intimate',
  templateUrl: 'intimate.html'
})
export class IntimateComponent {

  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  intimadoSelect:any;

  constructor() {
  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

}
