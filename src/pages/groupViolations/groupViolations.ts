import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {InfracoesService} from "../../services/infracoes";
import {Splashscreen} from "ionic-native";

@IonicPage()
@Component({
    selector: 'page-group-violations',
    templateUrl: 'groupViolations.html',
    providers: [InfracoesService]
})
export class GroupViolationsPage {
  violations: any;
  copy: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public infracoes:InfracoesService
  ) {
    this.violations = navParams.get('violations') ? navParams.get('violations') : [];
    console.log("------",this.violations)
  }

  ngOnInit(){
    if(this.violations.length < 1){
      this.loadInfracoes();
    }else{
      this.copy = JSON.parse(JSON.stringify(this.violations))
    }

  }

  loadInfracoes(){
    this.infracoes.getInfrcoes().subscribe((result) => {
      if(result.success){
        this.violations = result.data
        this.copy = JSON.parse(JSON.stringify(this.violations))
      }
    })
  }

  onClose(){

    let alert = this.alertCtrl.create({
      title: "<img src='assets/images/icons/icon_question.png' class='iconImage' alt=''>",
      message: 'Deseja realmente cancelar sua notificação?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.viewCtrl.dismiss(this.copy);
          }
        },
        {
          text: 'Não ',
          handler: () => {
            console.log('No selected!');
          }
        }
      ],
      cssClass: 'alertCustomCss'
    });
    alert.present();


  }


  onOpenNotification(item: any){
    console.log(">>>>onOpenNotification",item)
    let modal = this.modalCtrl.create('ViolationPage',{violation:item},{
      showBackdrop: false
    })
    modal.onDidDismiss(dataViolations => {
     let countChecked = 0;
      if(dataViolations){
        item =  JSON.parse(JSON.stringify(dataViolations))
        let index = this.violations.map((violation) => { return violation.id_infracao}).indexOf(item.id_infracao )
        this.violations[index] = item;
        this.violations.map((violation) => {
          countChecked = 0;
          violation.infracao.map((infracao) =>{
            if(infracao.checked){
              countChecked++
            }
          })
          violation.countChecked = countChecked;
        })
      }
    });
    modal.present();
  }

  onSave(){
    console.log("--SAVE",this.violations)
    this.viewCtrl.dismiss((this.violations));
  }

}
