import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OcorrenciasService} from "../../services/ocorrencias";
import {AuthService} from "../../services/auth.service";

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [OcorrenciasService, AuthService]
})
export class DashboardPage {
  params: any = {};
  userId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ocorrencias: OcorrenciasService, public auth: AuthService) {
    this.params.events = {
      onItemClick: function(item) {
        console.log("onItemClick",item);
        navCtrl.push("DetailServicePage",{item:item});
      },
    };




  }

  ngOnInit(){
    this.userId = this.auth.getuserId()
    this.getOcorrencias()
  }

  getOcorrencias(){
    console.log(">>>>getOcorrencias")
    this.ocorrencias.getOcorrencias(this.userId).subscribe((result) => {
      if(result.success){
        console.log(result.data)
        this.params.data = result.data
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  doRefresh(refresher) {
    this.ocorrencias.getOcorrencias(this.userId).subscribe((result) => {
      if(result.success){
        refresher.complete();
        this.params.data = result.data
      }
    })

  }

}
