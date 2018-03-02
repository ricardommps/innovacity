import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-violation',
  templateUrl: 'violation.html',
})
export class ViolationPage {
  params: any = {};
  violationsSelected: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.violationsSelected = navParams.get('violations') ? navParams.get('violations') : {};
    console.log(this.violationsSelected);
    this.params = {
      title:"Infrações",
      data:[
        {
          "id":"01",
          "infracao":"Lotes/Edificações",
          "tipos":[
            {
              "id":"PLH-00",
              "title":"PLH-00 - Quintais e pátios - Deixar de manter em perfeito estado de asseio, bom como seus quintais, pátios e terrenos."
            },
            {
              "id":"PLH-01",
              "title":"PLH-01 - Mato alto/Lixo - Não é permitida a existência de terrenos cobertos de mato ou servindo de depósito de lixo."
            },
            {
              "id":"PLH-02",
              "title":"PLH-02 - Água parada - Não é permitido conservar água estagnada nos quintais ou pátios situados no município."
            },
            {
              "id":"PLH-03",
              "title":"PLH-03 - Ar condicionado - Deixar de ter canalizado o escoamento de água produzida pelo ar condicionado."
            }
          ]
        },
        {
          "id":"02",
          "infracao":"Logradouros públicos",
          "tipos":[
            {
              "id":"PLH-04",
              "title":"PLH-04 - Abrir rua(s) sem prévia licença, em alinhamento e nivelamento."
            },
            {
              "id":"PLH-05",
              "title":"PLH-05 - Deixar em mau estado de conservação os passeios fronteiriços, paredes frontais das edificações e dos muros voltada a via pública."
            },
            {
              "id":"PLH-06",
              "title":"PLH-06 - Danificar o calçamento, passeios e meio-fios.",
            },
            {
              "id":"PLH-07",
              "title":"PLH-07 - Deixar de remover os restos e entulhos resultantes de construção, reconstrução ou demolição."
            }
          ]
        },

      ],
      events:{
        'onClose': function(service: any) {
          viewCtrl.dismiss();
        },
        'onSaveViolations': function(item: any) {
          console.log(">>onSaveViolations",item);
          viewCtrl.dismiss(item);
        },
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViolationPage');
  }

}
