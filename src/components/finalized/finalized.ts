import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'finalized',
  templateUrl: 'finalized.html'
})
export class FinalizedComponent {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  constructor() {}

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

}
