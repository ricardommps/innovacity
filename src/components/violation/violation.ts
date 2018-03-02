import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'violation',
  templateUrl: 'violation.html'
})
export class ViolationComponent {

  @Input() data: any;
  @Input() events: any;
  @Input() violationsSelected: any;
  @ViewChild(Content)
  content: Content;
  categories = '';
  typeSelected = [];
  violations = [];
  constructor() {

  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  segmentChanged($event) {
    this.categories = $event._value
  }

  ngAfterContentInit(){
    this.categories = this.data[0].infracao
    if(this.data){
      this.violations = Object.assign([], this.data)
      this.typeSelected = this.violationsSelected ? this.violationsSelected : []
      this.violations.map((violation) => {
        violation.tipos.map((violationTipo) => {
          this.typeSelected.map((violationSelected) => {
            if(violationSelected.id == violationTipo.id){
              violationTipo.checked = true
            }
          })
        })
      })
      console.log(this.violations);
    }
  }

  filterItemsOfViolation(type){
    let dataFilter = this.data.filter(x => x.infracao == type)
    return dataFilter[0].tipos
  }


  updateTypeSelected(item) {
    let index = this.typeSelected.map((item) => { return item.title;}).indexOf(item.title)
    if(index < 0){
      this.typeSelected.push(item)
    }else{
      this.typeSelected.splice(index, 1);
    }

    console.log("<<updateTypeSelected<<")
    console.log(this.typeSelected)

  }

}



