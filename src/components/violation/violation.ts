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
    this.categories = Object.assign({}, this.data[0])
    this.categorieSelected = this.categories
    if(this.data){
      this.violations = this.data
      this.typeSelected = this.violationsSelected ? this.violationsSelected : []
      this.violations.map((violation) => {
        violation.infracao.map((infracao) => {
          this.typeSelected.map((violationSelected) => {
            if(violationSelected.codigo == infracao.codigo){
              infracao.checked = true
            }
          })
        })
      })
    }
  }

  updateTypeSelected(item) {
    let index = this.typeSelected.map((item) => { return item.codigo}).indexOf(item.codigo )
    if(index < 0){
      item.checked = true
      this.typeSelected.push(item)
    }else{
      this.typeSelected.splice(index, 1);
    }

  }

}



