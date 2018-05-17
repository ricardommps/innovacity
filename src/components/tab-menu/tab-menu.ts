import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';


@Component({
  selector: 'tab-menu',
  templateUrl: 'tab-menu.html'
})
export class TabMenuComponent {
  @Input() dataFinalized: any;
  @Input() dataWaiting: any;
  @Input() dataPending: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  constructor() {
  }

  onEvent(event: string, item: any, e: any) {
    console.log(event)
    if (this.events[event]) {
      this.events[event](item);
    }
  }



}
