import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {ComentariosOcorrenciaPage} from "../comentarios-ocorrencia/comentarios-ocorrencia";
import { OcorrenciasService } from '../../services/ocorrencias';

@IonicPage()
@Component({
  selector: 'page-detail-service',
  templateUrl: 'detail-service.html',
  providers: [OcorrenciasService]
})
export class DetailServicePage {
  params: any = {};
  colorAvatar = '#4FC3F7';
  items: any ={};
  public idService;
  text: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              public ocorrenciaService: OcorrenciasService) {
    //this.idService = 33;
    this.items = navParams.get('item');
    console.log(this.items)
    this.params = {
      title:"Atendimento",
      events:{
        'onEndService': function(occurence: any) {
          alertComentarios(occurence)
        },
        'onOpenService': function(item: any) {
          console.log(item)
          navCtrl.push("NotificationPage",{idService:item.id});
        },
      }
    }

    function alertComentarios(occurence){
      console.log(occurence)
      let modal = modalCtrl.create('ComentariosOcorrenciaPage',{occurence:occurence})
      modal.onDidDismiss(data => {
       console.log(data);
       var dataOccurence = {
         "comentario":data.comentario,
         "id_ocorrencia":data.ocorrenciaData.id
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
        /*ocorrenciaService.closeOccurence(dataOccurence)
          .then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err)
        });*/
      });
      modal.present();
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



  ionViewDidLoad() {
  }

}
