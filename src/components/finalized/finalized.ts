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
  colorAvatar = '#4FC3F7';

  constructor() {}

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

}
