import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';


@Component({
  selector: 'group-violations',
  templateUrl: 'groupViolations.html'
})
export class GroupViolationsComponent {

  @Input() data: any;
  @Input() title: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  constructor() {

  }

  onEvent(event: string, item: any, e: any) {
    console.log("--->>",item)
    if (this.events[event]) {
      this.events[event](item);
    }
  }

}
