import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-finalized',
  templateUrl: 'finalized.html',
})
export class FinalizedPage {
  params: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      items:[
        {
          "id":1,
          "title":"Terreno Baldio",
          "address":"Rua Orlando Tancredo",
          "occurrence":"Via ouvidoria: Terrono com mato alto",
          "date":"27 de dez",
          "distance":"1,5 km"
        },
        {
          "id":2,
          "title":"Terreno Baldio",
          "address":"Rua Orlando Tancredo",
          "occurrence":"Via ouvidoria: Terrono com mato alto",
          "date":"27 de dez",
          "distance":"1,5 km"
        }
      ]
    };

    this.params.events = {
      onItemClick: function(item) {
        console.log("onItemClick",item);
        //navCtrl.push("DetailServicePage",{idService:item.id});
      },
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizedPage');
  }

}
