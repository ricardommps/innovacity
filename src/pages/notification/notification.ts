import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Geocoder, GeocoderRequest, GeocoderResult, LatLng } from '@ionic-native/google-maps'
import {IonicPage, NavController, NavParams, ModalController, AlertController, Platform } from 'ionic-angular';
import { ContribuinteService } from '../../services/contribuinte';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IntimatePage} from "../intimate/intimate";
import * as moment from 'moment';
import {NotificacaoService} from "../../services/notificacao";


function validateViolations(control: FormControl) {

  return {
    validateViolations: {
      valid: false
    }
  }
 }


@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
  providers: [ContribuinteService, NotificacaoService]
})
export class NotificationPage {
  params: any
  violations:any = []
  public idService
  notificacaoForm: FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private geolocation: Geolocation,
              private geocoder: Geocoder,
              public formBuilder: FormBuilder,
              private alertCtrl: AlertController,
              public contribuinte: ContribuinteService,
              public notificacao: NotificacaoService,
              public platform: Platform) {
    this.idService = navParams.get("idService");
    this.params = {
      title:"Cadastrar Irregularidade",
      data:[]
    }


    this.notificacaoForm = formBuilder.group({
      logradouro: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      numero:[],
      complemento:[],
      lote:[],
      quadra:[],
      nome_razaosocial_proprietario:[],
      cpf_cnpj_proprietario:[],
      prazo: ['', Validators.compose([Validators.required])],
      violations :['', Validators.compose([Validators.required])],
    })

  }


  onOpenViolation(){
    console.log("onOpenViolation");
    let modal = this.modalCtrl.create('ViolationPage',{violations:this.violations})
    modal.onDidDismiss(dataViolations => {
      if(dataViolations){
        this.violations = dataViolations;
        this.notificacaoForm.controls['violations'].setValue(dataViolations);
        console.log("---------",this.notificacaoForm.controls['violations'])
      }
    });
    modal.present();
  }

  onSave(){
    var violations_id = []
    console.log(">>>>violations",this.violations);

    this.violations.map(violation => {
      console.log("----violation",violation)
      violations_id.push(violation.id_infracao)
    });
    var now = moment(new Date()).format("YYYY-MM-DD").split('-')
    var numero_notificacao = now[0]+now[1]+now[2]+this.idService
    var notification = {
      complemento : this.params.data.complemento ? this.params.data.complemento : null,
      cpf_cnpj_proprietario : this.params.data.cpf_cnpj_proprietario ? this.params.data.cpf_cnpj_proprietario : null,
      logradouro : this.params.data.logradouro,
      lote : this.params.data.lote ? this.params.data.lote : null,
      nome_razaosocial_proprietario  : this.params.data.nome_razaosocial_proprietario ? this.params.data.nome_razaosocial_proprietario : null,
      numero : this.params.data.numero ? this.params.data.numero : null,
      quadra : this.params.data.quadra ? this.params.data.quadra : null,
      prazo  : this.params.data.prazo,
      infracoes  : violations_id,
      id_ocorrencia  : this.idService,
      data_cadastro  : moment(new Date()).format("YYYY-MM-DD"),
      numero_notificacao  : numero_notificacao,
      tipo_notificacao : "autuação"
    }

    this.notificacao.notification(notification)
      .then((result) => {
        if (result.json().success) {
          this.navCtrl.setRoot("DashboardPage");
        }else{
          this.error(result.json().data)
        }
      }).catch((err) => {
        console.log(err)
      });

    console.log(">>>>>",notification)
    //this.navCtrl.setRoot("DashboardPage");
  }

    alert(msg){
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: msg,
      buttons: ['Fechar']
    });
    alert.present();
  }

  error(err){
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: err,
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            this.navCtrl.setRoot("DashboardPage");
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log(this.idService);
  }

  getCurrentPosition(){
    console.log(">>>>platform")
    this.platform.ready().then(() => this.obtenerPosicion()).catch((error) => {
      console.log('Error platform ready', error);
    });
   /* this.geolocation.getCurrentPosition().then((resp) => {
      console.log(">>getCurrentPosition<<",resp)
      let request: GeocoderRequest = {
        position: new LatLng(resp.coords.latitude, resp.coords.longitude)
      }
      this.geocoder.geocode(request)
        .then((results: GeocoderResult) => {
          console.log(results)
          this.params.data.logradouro = results[0].thoroughfare
          this.params.data.numero = results[0].subThoroughfare
          /!*let address = [
            (results[0].thoroughfare || "") + " " + (results[0].subThoroughfare || ""),
            results[0].locality
          ].join(", ");
          console.log(">>DATA_:",address)*!/
        })

    }).catch((error) => {
      console.log('Error getting location', error);
    });*/
  }

  obtenerPosicion(): any {
    console.log(">>>obtenerPosicion");
    let options = {
      timeout:10000,
      enableHighAccuracy:true
    };
    this.geolocation.getCurrentPosition(options).then((response) => {
      console.log(response);
      let request: GeocoderRequest = {
        position: new LatLng(response.coords.latitude, response.coords.longitude)
      }
      this.geocoder.geocode(request)
        .then((results: GeocoderResult) => {
          console.log(results)
          if(!results[0].thoroughfare){
            alert("Não foi possivel verificar sua posição. Insira o endereço manualmente")
          }else{
            this.params.data.logradouro = results[0].thoroughfare
            this.params.data.numero = results[0].subThoroughfare
          }
        })
    })
      .catch(error => {
        console.log(error);
      })
  }

  searchIntimate(value: any){
    if(value.logradouro){
      if(value.logradouro.length > 0) {
        var search:any ={}
        search.logradouro = value.logradouro;
        if(value.numero){
          search.numero = value.numero;
        }
        if(value.lote){
          search.lote = value.lote;
        }
        if(value.quadra){
          search.quadra = value.quadra;
        }

        this.contribuinte.getContribuinte(search).then((result) => {
          if (result.json().success) {
            if(result.json().data.length == 0){
              alert("Não foi possivel localizar um proprietário com base no endereço inserido.")
            }else  if(result.json().data.length == 1){
              console.log(result.json().data)
              this.params.data.nome_razaosocial_proprietario = result.json().data[0].nome_razaosocial_proprietario ? result.json().data[0].nome_razaosocial_proprietario : ""
              this.params.data.cpf_cnpj_proprietario = result.json().data[0].cpf_cnpj_proprietario ? result.json().data[0].cpf_cnpj_proprietario : ""
              this.params.data.numero = result.json().data[0].numero ? result.json().data[0].numero : ""
              this.params.data.quadra = result.json().data[0].quadra ? result.json().data[0].quadra : ""
              this.params.data.lote = result.json().data[0].lote ? result.json().data[0].lote : ""
            }else{
              console.log("Encontrado mais de uma pessoa")
              this.selectedIntimate(result.json().data)
            }
          }else{

          }
        }).catch((err) => {
          console.log(err)
        });
      }
    }

  }

  selectedIntimate(intimate){
    console.log(intimate)
    let modal = this.modalCtrl.create('IntimatePage',{intimates:intimate})
    modal.onDidDismiss(dataIntimate => {
      console.log(dataIntimate);
      this.params.data.nome_razaosocial_proprietario = dataIntimate.nome_razaosocial_proprietario ? dataIntimate.nome_razaosocial_proprietario : ""
      this.params.data.cpf_cnpj_proprietario = dataIntimate.cpf_cnpj_proprietario ? dataIntimate.cpf_cnpj_proprietario : ""
      this.params.data.numero = dataIntimate.numero ? dataIntimate.numero : ""
      this.params.data.quadra = dataIntimate.quadra ? dataIntimate.quadra : ""
      this.params.data.lote = dataIntimate.lote ? dataIntimate.lote : ""
    });
    modal.present();
  }
}

//this.nativeGeocoder.reverseGeocode(resp.coords.latitude,resp.coords.longitude)
