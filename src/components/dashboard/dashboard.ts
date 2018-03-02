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
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  active: boolean;
  showDetalhes: boolean = false;
  colorAvatar = '#4FC3F7';
  itensData: any = {};
  today : any;

  constructor(public keyboard : Keyboard, public datePicker : DatePicker) {
    console.log(this.data)
  }

  ngOnInit(){
    console.log(">>",this.data)
  }

  openDatepicker(){
    this.keyboard.close();
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        this.today=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()},
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  openCamera(){
    console.log(">>Open camera");
    //CamerasPage
  }

  onEvent(event: string, index: number, e: any) {
    if (this.events[event]) {
      this.events[event](index);
    }
    console.log(event);
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

  toggleGroup() {
    this.showDetalhes = !this.showDetalhes ? true : false
  }

  isGroupShown(group: any) {
    console.log("<<isGroupShown",group)
    return group.show;
  }

  onItemClick(item: any){
    console.log(item)
  }

}
