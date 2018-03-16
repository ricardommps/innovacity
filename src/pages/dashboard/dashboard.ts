import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OcorrenciasService } from "../../services/ocorrencias";
import { AuthService } from "../../services/auth.service";
import { NotificacaoService } from "../../services/notificacao";
import {WaitingPage} from "../waiting/waiting";

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [OcorrenciasService, AuthService, NotificacaoService]
})
export class DashboardPage {
  params: any = {};
  userId:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ocorrencias: OcorrenciasService,
              public auth: AuthService,
              public notificacao: NotificacaoService) {
    this.params.events = {
      onItemClick: function(item) {
        console.log("onItemClick",item);
        navCtrl.push("DetailServicePage",{item:item});
      },
      onWaitingClick: function(item) {
        console.log("onItemClick",item);
        navCtrl.push("WaitingPage");
      }
    };
  }



  ionViewDidEnter() {
    this.userId = this.auth.getuserId()
    this.getOcorrencias()
    this.getNotificacoes()
  }

  getOcorrencias(){
    console.log(">>>>getOcorrencias")
    this.ocorrencias.getOcorrencias(this.userId).subscribe((result) => {
      if(result.success){
        console.log(result.data)
        this.params.data = result.data
      }else{
        this.params.data = []
      }
    })
  }

  getNotificacoes(){
    this.notificacao.getNotificationOverdue(this.userId).subscribe((result) => {
      if(result.success){
        console.log(result.data)
        this.params.notificationOverdue = result.data
      }else{
        this.params.notificationOverdue = []
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
