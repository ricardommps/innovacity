import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import {InfracoesService} from "../../services/infracoes";

@IonicPage()
@Component({
  selector: 'page-violation',
  templateUrl: 'violation.html',
  providers: [InfracoesService]
})
export class ViolationPage {
  typeSelected: any ;
  copy: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public infracoes:InfracoesService) {

    //this.params.data = navParams.get('violation') ? navParams.get('violation') : {};
  }

  ngOnInit(){
    console.log("-----ngOnInit");
    this.typeSelected = this.navParams.get('violation');
    console.log("-----typeSelected",this.typeSelected);
    this.typeSelected.infracao.map((infracao) => {
      if(infracao.checked == undefined){
        infracao.checked = false
      }
    })
    console.log("-----typeSelected",this.typeSelected);
    this.copy = JSON.parse(JSON.stringify(this.typeSelected))
    console.log("-----copy",this.copy);
  }

  onClose(){
    console.log("-----onClose-----",this.copy)
    this.viewCtrl.dismiss(this.copy);
    //this.navCtrl.pop();
  }

  onSave(){
    console.log(">>typeSelected",this.typeSelected)
    this.viewCtrl.dismiss(this.typeSelected);
  }

  teste(item,element){
    let elementItem = (item.split("-"))
    if(element == 'title'){
      return elementItem[0]
    }else if(element == 'subTitle'){
      return elementItem[1]
    }
    return ""

  }

  getClassDisplay(item) {
    var strText = item.split("-")[1].trim()
    if (strText.length > 110) {
      return "displayMore";
    } else {
      return "displayNoneMore";
    }
  }


}
