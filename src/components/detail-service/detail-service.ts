import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'detail-service',
  templateUrl: 'detail-service.html'
})
export class DetailServiceComponent {

  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  constructor() {

  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

}
