import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {ComentariosOcorrenciaPage} from "../comentarios-ocorrencia/comentarios-ocorrencia";
import { OcorrenciasService } from '../../services/ocorrencias';
import { NotificacaoService } from '../../services/notificacao';
import {AuthService} from "../../services/auth.service";

@IonicPage()
@Component({
  selector: 'page-detail-service',
  templateUrl: 'detail-service.html',
  providers: [OcorrenciasService, NotificacaoService]
})
export class DetailServicePage {
  params: any = {};
  colorAvatar = '#4FC3F7';
  ocorrencia: any ={};
  items: any = {};
  public idService;
  text: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              public ocorrenciaService: OcorrenciasService,
              public auth: AuthService,
              public notificacao: NotificacaoService) {
    this.ocorrencia = navParams.get('ocorrencia');
    if(this.ocorrencia){
     if(this.ocorrencia.status_id == 1){
        this.ocorrenciaService.occurence(this.ocorrencia.id_ocorrencia).subscribe((occurence) => {
          if(occurence.success){
            this.items = occurence.data
            if(!this.items[0].lida){
              if(this.items[0].status_id == 1){
                ocorrenciaService.occurenceRead(this.items[0].id).subscribe(() => {
                })
              }
            }
          }
        })
     }else if(this.ocorrencia.status_id == 2){
       ocorrenciaService.occurenceClose(this.ocorrencia.id_ocorrencia).subscribe((occurence) => {
         if(occurence.success){
           this.items = occurence.data
         }
       })
     }else{
       notificacao.notificationDetails(this.ocorrencia.id_ocorrencia).subscribe((occurence) => {
         if(occurence.success){
           this.items = occurence.data
         }
       })

     }
    }

    this.params = {
      events:{
        'onEndService': function(occurence: any) {
          alertComments(occurence)
        },
        'onCloseNotification': function(notification: any) {
          console.log("---onCloseNotification")
          closeNotification(notification)
        },
        'onEndNotification': function(occurence: any) {
          alertComments(occurence)
        },
        'onOpenService': function(item: any) {
          navCtrl.push("NotificationPage",{idService:item.id});
        },
      }
    }


    function endNotification(notification){
      let modal = modalCtrl.create('ComentariosOcorrenciaPage',{occurence:notification})
      modal.onDidDismiss(data => {
        var dataClose = {
          "comentario": data.comentario,
          "id_ocorrencia": data.ocorrenciaData.id,
          "id_usuario" : auth.getuserId()
        }

        ocorrenciaService.closeOccurence(dataClose)
          .then((result) => {
            if (result.json().success) {
              successCloseNotification();
            }else{
              error(result.json().data);
            }

          }).catch((err) => {
          error(err);
        });

      });
      modal.present();
    }

    function closeNotification(notification){
        console.log('-----closeNotification',notification)
      var dataClose = {
        "id_ocorrencia": notification.id_ocorrencia,
        "id_usuario" : auth.getuserId()
      }

      notificacao.closeNotification(dataClose)
        .then((result) => {
          if (result.json().success) {
            successCloseNotification();
          }else{
            error(result.json().data);
          }

        }).catch((err) => {
        error(err);
      });

    }

    function alertComments(occurence){
      let modal = modalCtrl.create('ComentariosOcorrenciaPage',{occurence:occurence})
      modal.onDidDismiss(data => {
       var dataOccurence = {
         "comentario": data.comentario,
         "id_ocorrencia": data.ocorrenciaData.id,
         "id_usuario" : auth.getuserId()
       }

        ocorrenciaService.closeOccurence(dataOccurence)
          .then((result) => {
            if (result.json().success) {
              success();
            }else{
              error(result.json().data);
            }

          }).catch((err) => {
              error(err);
          });

      });
      modal.present();
    }

    function successCloseNotification(){
      let alert = alertCtrl.create({
        title: 'Sucesso!',
        subTitle: 'Notificação finalizada com sucesso!',
        buttons: [{
          text: 'Fechar',
          handler: () => {
            navCtrl.setRoot("WaitingPage");
          }
        }]
      });
      alert.present();
    }

    function success(){
      let alert = alertCtrl.create({
        title: 'Sucesso!',
        subTitle: 'Ocorrência finalizada com sucesso!',
        buttons: [{
          text: 'Fechar',
          handler: () => {
            navCtrl.setRoot("DashboardPage");
          }
        }]
      });
      alert.present();

    }

    function error(err){
      let alert = alertCtrl.create({
        title: 'Atenção!',
        subTitle: err,
        buttons: [
          {
            text: 'Fechar',
            handler: () => {
              navCtrl.setRoot("DashboardPage");
            }
          }
        ]
      });
      alert.present();
    }
  }

  titlePage(status){
    return status
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }




}
