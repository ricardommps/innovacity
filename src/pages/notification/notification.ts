import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Geocoder, GeocoderRequest, GeocoderResult, LatLng } from '@ionic-native/google-maps'
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  params: any
  violations:any = []
  public idService

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private geolocation: Geolocation,
              private geocoder: Geocoder) {
    this.idService = navParams.get("idService");
    this.params = {
      title:"Cadastrar Irregularidade",
      data:[]
    }

  }

  onOpenViolation(){
    console.log("onOpenViolation");
    let modal = this.modalCtrl.create('ViolationPage',{violations:this.violations})
    modal.onDidDismiss(dataViolations => {
      if(dataViolations){
        this.violations = dataViolations;
      }
    });
    modal.present();
  }

  onSave(){
    this.navCtrl.setRoot("DashboardPage");
  }

  ionViewDidLoad() {
    console.log(this.idService);
  }

  getCurrentPosition(){

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(">>getCurrentPosition<<",resp)
      let request: GeocoderRequest = {
        position: new LatLng(-27.43838, -48.39866)
      }
      this.geocoder.geocode(request)
        .then((results: GeocoderResult) => {
          console.log(results)
          this.params.data.logradouro = results[0].thoroughfare
          this.params.data.numero = results[0].subThoroughfare
          /*let address = [
            (results[0].thoroughfare || "") + " " + (results[0].subThoroughfare || ""),
            results[0].locality
          ].join(", ");
          console.log(">>DATA_:",address)*/
        })

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}

//this.nativeGeocoder.reverseGeocode(resp.coords.latitude,resp.coords.longitude)
