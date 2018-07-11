import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Platform } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AssuntoService } from "../../services/assunto";
import { OcorrenciasService } from '../../services/ocorrencias';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { AuthService } from "../../services/auth.service";

@IonicPage()
@Component({
  selector: 'page-createOccurrence',
  templateUrl: 'createOccurrence.html',
  providers: [AssuntoService, OcorrenciasService]
})
export class CreateOccurrencePage {
  params: any
  notificacaoForm: FormGroup;
  assuntos: any;
  assuntoSelected: any = null;
  occurrence: any;
  loader: any
  address;
  userInfo: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private geolocation: Geolocation,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private nativeGeocoder: NativeGeocoder,
    public assunto: AssuntoService,
    public ocorrenciaService: OcorrenciasService,
    public auth: AuthService) {
    this.params = {
      title: "Gerar Ocorrência",
      data: []
    }
    this.notificacaoForm = formBuilder.group({
      logradouro: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      assunto: ['', Validators.required],
      numero: [],
      complemento: [],
      resumo: ['', Validators.required]
    })
    this.address = {
      place: ''
    };

  }

  ionViewDidEnter() {
    this.assunto.list().subscribe((result) => {
      if (result.success) {
        this.assuntos = result.data
      } else {
        this.assuntos = null
      }
    })
    this.userInfo = this.auth.getUser();
  }

  showAddressModal() {
    this.params.data.numero = ""
    this.address.place = ""
    let modal = this.modalCtrl.create('AutoCompleteMapsPage');
    modal.onDidDismiss(data => setTimeout(() => {
      this.address.place = data;
    }));
    modal.present();
  }

  selecteChange(val: any) {
    this.notificacaoForm.controls['assunto'].setValue(val);
  }

  saveOccurrence() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.platform.ready().then(() => {
      this.loader.present().then(() => {
        let adressGeocode: any
        let addressComplete: any
        let geocoded: any;
        let adressMaps = this.notificacaoForm.value.logradouro.split("-");
        if (adressMaps.length > 0) {
          if (this.notificacaoForm.value.numero) {
            adressMaps[0] = `${adressMaps[0]},${this.notificacaoForm.value.numero} `
            adressGeocode = adressMaps.join('-')
          }

          if (this.notificacaoForm.value.numero && this.notificacaoForm.value.complemento) {
            adressMaps[0] = `${adressMaps[0]},${this.notificacaoForm.value.complemento} `
          }

        }

        this.forwardGeocode(adressGeocode ? adressGeocode : this.notificacaoForm.value.logradouro)
          .then(geocodedResult => {
            if (geocodedResult.lat && geocodedResult.long) {
              geocoded = geocodedResult;
              addressComplete = adressMaps.length > 0 ? adressMaps.join('-') : null;
              let dataSave = {

                "conteudo": this.notificacaoForm.value.resumo,
                "lat": geocoded.lat,
                "long": geocoded.long,
                "email": this.userInfo.email,
                "endereco": addressComplete,
                "id_assunto": this.notificacaoForm.value.assunto,
                "usuario_fiscal_id": this.userInfo.id,
                "nome_solicitante": this.userInfo.nome

              }
              this.ocorrenciaService.createOccurrence(dataSave)
                .then((result) => {
                  this.loader.dismiss();
                  if (result.json().success) {
                    this.alert('Sucesso', 'Ocorrência criada com sucesso!', 'DashboardPage');
                  } else {
                    this.alert('Atenção!', result.json().data, 'DashboardPage');
                  }

                }).catch((err) => {
                  this.loader.dismiss();
                  this.alert('Atenção!', err, 'DashboardPage');
                });
            } else {
              this.loader.dismiss();
              this.alert('Atenção!', 'Erro ao buscar endereços', 'DashboardPage');
            }
          }).catch(errorgeocoded => {
            this.loader.dismiss();
            this.alert('Atenção!', errorgeocoded, 'DashboardPage');
          })
      })
    }).catch((error) => {
      this.loader.dismiss();
    });
  }

  getCurrentPosition() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.platform.ready().then(() => {
      this.loader.present().then(() => {
        this.getPosition();
      })
    }).catch((error) => {
      this.loader.dismiss();
    });
  }

  getPosition(): any {
    let options = {
      timeout: 10000,
      enableHighAccuracy: true
    };
    this.geolocation.getCurrentPosition(options).then((response) => {
      this.reverseGeocode(response.coords.latitude, response.coords.longitude)
        .then(result => {
          this.loader.dismiss();
          this.params.data.numero = ""
          this.address.place = ""
          this.address.place = result[0].thoroughfare
          this.params.data.numero = result[0].subThoroughfare
        })
        .catch(err => {
          this.loader.dismiss();
          alert(err)
        });
    })
  }

  reverseGeocode(lat, long) {
    return new Promise((resolve, reject) => {
      this.nativeGeocoder.reverseGeocode(lat, long)
        .then((res: NativeGeocoderReverseResult[]) => {
          if (!res[0].thoroughfare) {
            reject('Não foi possivel verificar sua posição. Insira o endereço manualmente');
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  forwardGeocode(keyword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.nativeGeocoder.forwardGeocode(keyword)
        .then((coordinates: NativeGeocoderForwardResult[]) => {
          let geocode: any = {
            lat: coordinates[0].latitude,
            long: coordinates[0].longitude
          }
          resolve(geocode);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  alert(title, message, page) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'Fechar',
        handler: () => {
          this.navCtrl.setRoot(page);
        }
      }]
    });
    alert.present();
  }
}
