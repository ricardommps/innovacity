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
  categories:any = null;
  categorieSelected:any = null;
  typeSelected = [];
  violations = [];
  constructor() {

  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](this.typeSelected ? this.typeSelected : []);
    }
  }

  onSelectChange(selectedValue: any) {
    this.violations.map((violation) => {
      if(selectedValue == violation.id_categoria){
        violation.checked = true
        this.categorieSelected = violation
      }
    })
  }
  ngAfterContentInit(){
    this.typeSelected = [];
    this.data.infracao.map((infracao) => {
      if(infracao.checked == undefined){
        infracao.checked = false
      }
    })
    this.typeSelected = Object.assign({},  this.data);
    console.log(">>>>typeSelected<<<<",this.typeSelected)

  }
}



