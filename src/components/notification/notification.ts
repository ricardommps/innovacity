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

  constructor() {
    console.log(">>constructor");
    console.log(this.events);
  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  ngOnInit(){
    console.log(">>ngOnInit");
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - wrapper', this.violations);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.violations);
  }


}
