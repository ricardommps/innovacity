import {Component, Input, ViewChild} from '@angular/core';
import {Content} from "ionic-angular";

@Component({
  selector: 'waiting',
  templateUrl: 'waiting.html'
})
export class WaitingComponent {

  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  active: boolean;
  showDetalhes: boolean = false;
  colorAvatar = '#4FC3F7';
  itensData: any = {};
  today : any;

  constructor() {
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

  onRefresh(){

  }

  toggleGroup() {
    this.showDetalhes = !this.showDetalhes ? true : false
  }

  isGroupShown(group: any) {
    console.log("<<isGroupShown",group)
    return group.show;
  }

  dueNotification(item){
    console.log(">>>dueNotification",item)
    if(!item.days){
      return 'willDueNotification'
    }
    var nDay =  parseInt(item.days);
    if(nDay < 0){
      return 'dueNotification'
    }
      return null
  }

}
