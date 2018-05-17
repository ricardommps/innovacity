import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import { OcorrenciasService } from "../../services/ocorrencias";
import { NotificacaoService } from "../../services/notificacao";


@IonicPage()
@Component({
  selector: 'page-finalized',
  templateUrl: 'finalized.html',
  providers: [OcorrenciasService, AuthService, NotificacaoService]
})
export class FinalizedPage {
  params: any = {};
  userId:any;
  waiting:any ={}
  finalized:any = {};
  pending:any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ocorrencias: OcorrenciasService,
              public auth: AuthService,
              public notificacao: NotificacaoService) {

    this.params.events = {
      onItemClick: function(ocorrencia) {
        console.log("FINALIZADA---",ocorrencia)
        navCtrl.push("DetailServicePage",{
            ocorrencia:{
              _id:ocorrencia.id,
              id_ocorrencia:ocorrencia.id_ocorrencia,
              status_id : ocorrencia.status_id
            }
        });
      },
      onNavigationPage: function (page) {
        navCtrl.setRoot(page);
      }
    };
  }

  ionViewDidEnter() {
    this.userId = this.auth.getuserId()
    this.getOcorrencias()
    this.getNotificacoes()
    this.getOccurencesClose()
  }

  getOcorrencias(){
    let countFinalized = 0
    this.ocorrencias.getOccurencesClose(this.userId).subscribe((result) => {
      if(result.success){
        console.log("-----getOccurencesClose-----",result.data)
        this.params.data = result.data
        let resultFinalized = result.data;
        resultFinalized.map(function(t){
          if(!t.lida){
            countFinalized++
          }
        });
        this.finalized.totalNews = countFinalized
        this.finalized.total = resultFinalized.length;
      }else{
        this.finalized.totalNews = 0
        this.finalized.total = 0;
      }
    })
  }

  getNotificacoes(){
    let countWaiting = 0
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
      }else{
        this.waiting.totalNews = 0;
        this.waiting.total =  0;
      }
    })
  }

  getOccurencesClose(){
    let countPending = 0
    this.ocorrencias.getOcorrencias(this.userId).subscribe((result) => {
      if(result.success){
        let resultPending = result.data;
        resultPending.map(function(t){
          if(!t.lida){
            countPending++;
          }
        });
        this.pending.totalNews = countPending;
        this.pending.total = resultPending.length;
      }else{
        this.pending.totalNews = 0;
        this.pending.total = 0;
      }
    })
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  doRefresh(refresher) {
    this.userId = this.auth.getuserId()
    this.getOcorrencias()
    this.getNotificacoes()
    this.getOccurencesClose()
    refresher.complete();

  }
}
