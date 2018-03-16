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
  params: any = {
    title:"Infrações",
    events:{},
    data:null
  };
  violationsSelected: any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public infracoes:InfracoesService) {
    this.violationsSelected = navParams.get('violations') ? navParams.get('violations') : {};
    console.log(this.violationsSelected);
    this.params = {
            events:{
        'onClose': function(item: any) {
          viewCtrl.dismiss(item ? item : []);
        },
        'onSaveViolations': function(item: any) {
          console.log(">>onSaveViolations",item);
          viewCtrl.dismiss(item);
        },
      }
    }
  }

  ngOnInit(){
    this.loadInfracoes();
  }

  loadInfracoes(){
    this.infracoes.getInfrcoes().subscribe((result) => {
      if(result.success){
        console.log(result.data)
        this.params.data = result.data
      }
    })
  }

}
