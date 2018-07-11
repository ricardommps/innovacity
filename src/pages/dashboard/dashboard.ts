import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { AuthService } from "../../services/auth.service";
import { OcorrenciasService } from "../../services/ocorrencias";
import { NotificacaoService } from "../../services/notificacao";

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [OcorrenciasService, AuthService, NotificacaoService]
})
export class DashboardPage {
  params: any = {};
  userId:any;
  waiting:any ={}
  finalized:any = {};
  pending:any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
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
      },
      onNavigationPage: function (page) {
        navCtrl.setRoot(page);
      },
      oncreateOccurrence(){
        console.log(">>>CreateOccurrencePage")
        navCtrl.push("CreateOccurrencePage");
      }
    };
  }

  ionViewDidLoad(){
    console.log("-----ionViewDidLoad");
    //this.fcm.getToken()
  }



  ionViewDidEnter() {
    this.userId = this.auth.getuserId()
    this.getOcorrencias()
    this.getNotificacoes()
    this.getFinalized()
  }

  getOcorrencias(){
    let countPending = 0
    this.ocorrencias.getOcorrencias(this.userId).subscribe((result) => {
      if(result.success){
        this.params.data = result.data
        let resultPending = result.data;
        resultPending.map(function(t){
          if(!t.lida){
            countPending++;
          }
        });
        this.pending.totalNews = countPending;
        this.pending.total = resultPending.length;
        console.log("<<<pending>>",this.pending)
        console.log("<<<pending>>",this.pending)
      }else{
        this.pending.totalNews = 0;
        this.pending.total = 0;
      }
    })
  }

  getNotificacoes(){
    let countWaiting = 0
    this.notificacao.getNotificationOverdue(this.userId).subscribe((result) => {
      if(result.success){
        this.params.notificationOverdue = result.data
      }
    })

    this.notificacao.getNotification(this.userId).subscribe((result) => {
      if(result.success){
        let resultWaiting = result.data;
        resultWaiting.map(function(t){
          if(!t.lida){
            countWaiting++
          }
        });
        this.waiting.totalNews = countWaiting;
        this.waiting.total =  resultWaiting.length;
        console.log("<<<waiting>>",this.waiting)
        console.log("<<<waiting>>",this.waiting)
      }else{
        this.waiting.totalNews = 0;
        this.waiting.total =  0;
      }
    })
  }

  getFinalized(){
    let countFinalized = 0
    this.ocorrencias.getOccurencesClose(this.userId).subscribe((result) => {
      if(result.success){
        let resultFinalized = result.data;
        resultFinalized.map(function(t){
          if(!t.lida){
            countFinalized++
          }
        });
        this.finalized.totalNews = countFinalized
        this.finalized.total = resultFinalized.length;
        console.log("<<<finalizedTotal>>",this.finalized)
        console.log("<<<finalized>>",this.finalized)
      }else{
        this.finalized.totalNews = 0
        this.finalized.total = 0;
      }
    })
  }

  doRefresh(refresher) {
    this.userId = this.auth.getuserId()
    this.getOcorrencias()
    this.getNotificacoes()
    this.getFinalized()
    refresher.complete();
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
