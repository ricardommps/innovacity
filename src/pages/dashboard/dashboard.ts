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
      onItemClick: function(ocorrencia) {
        console.log(">>>>",ocorrencia)
        navCtrl.push("DetailServicePage",{
          ocorrencia:{
            id_ocorrencia:ocorrencia.id,
            status_id : ocorrencia.status_id
          }
        });
      },
      onWaitingClick: function(item) {
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
    this.ocorrencias.getOcorrencias(this.userId).subscribe((result) => {
      if(result.success){
        this.params.data = result.data
      }else{
        this.params.data = []
      }
    })
  }

  getNotificacoes(){
    this.notificacao.getNotificationOverdue(this.userId).subscribe((result) => {
      if(result.success){
        this.params.notificationOverdue = result.data
      }else{
        this.params.notificationOverdue = []
      }
    })
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
