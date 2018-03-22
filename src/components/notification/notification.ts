import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent {
  @Input() data: any;
  @Input() events: any;
  @Input() violations: any;
  @ViewChild(Content)
  content: Content;
  text: string;

  constructor() {}

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }



}
