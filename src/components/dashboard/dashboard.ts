import { Component, Input, ViewChild } from '@angular/core';
import {  Content } from 'ionic-angular';

import { Keyboard } from '@ionic-native/keyboard';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {

  @Input() data: any;
  @Input() notificationOverdue: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  active: boolean;
  showDetalhes: boolean = false;
  colorAvatar = '#4FC3F7';
  itensData: any = {};
  today : any;

  constructor(public keyboard : Keyboard, public datePicker : DatePicker) {
  }


  onEvent(event: string, index: number, e: any) {
    if (this.events[event]) {
      this.events[event](index);
    }
  }

  onStarClass(items: any, index: number, e: any) {
    for (var i = 0; i < items.length; i++) {
      items[i].isActive = i <= index;
    }
    this.onEvent("onRates", index, e);
  };

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.subscribeToIonScroll();
  }

  ngAfterViewInit() {
    this.subscribeToIonScroll();
  }

  ngAfterViewChecked() {
    this.subscribeToIonScroll();
  }

  isClassActive() {
    return this.active;
  }

  subscribeToIonScroll() {
    if (this.content != null && this.content.ionScroll != null) {
      this.content.ionScroll.subscribe((d) => {
        if (d.scrollTop < 200 ) {
          this.active = false;
          return;
        }
        this.active = true;
      });
    }
  }

  onRefresh(){

  }

  toggleGroup() {
    this.showDetalhes = !this.showDetalhes ? true : false
  }

  isGroupShown(group: any) {
    return group.show;
  }
}
