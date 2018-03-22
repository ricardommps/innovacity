import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificacaoService } from "../../services/notificacao";
import { AuthService } from "../../services/auth.service";

@IonicPage()
@Component({
  selector: 'page-waiting',
  templateUrl: 'waiting.html',
  providers: [NotificacaoService]
})
export class WaitingPage {
  params: any = {};
  userId:any;
  items: any ={};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public notificacao: NotificacaoService,
              public auth: AuthService,) {
    this.params.events = {
      onItemClick: function(notification) {
        console.log("---------",notification)
        navCtrl.push("DetailServicePage",{
          ocorrencia:{
            id_ocorrencia:notification.id_ocorrencia,
            status_id : notification.status_id
          }
        });
      },
    };
  }

  ionViewDidEnter() {
    this.userId = this.auth.getuserId()
    this.notificacao.notificationAlertRead(this.userId).subscribe(() =>{
    })
    this.notificacao.getNotification(this.userId).subscribe((result) => {
      if(result.success){
        this.items = result.data
      }
    })
  }

  doRefresh(refresher) {
    this.notificacao.getNotification(this.auth.getuserId()).subscribe((result) => {
      if(result.success){
        refresher.complete();
        this.items = result.data
      }
    })
  }

}
