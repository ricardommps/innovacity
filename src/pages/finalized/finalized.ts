import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OcorrenciasService } from '../../services/ocorrencias';
import {AuthService} from "../../services/auth.service";

@IonicPage()
@Component({
  selector: 'page-finalized',
  templateUrl: 'finalized.html',
  providers: [OcorrenciasService, AuthService]
})
export class FinalizedPage {
  params: any = {};
  userId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ocorrencias: OcorrenciasService, public auth: AuthService) {

    this.params.events = {
      onItemClick: function(ocorrencia) {
        console.log("---------",ocorrencia)
        navCtrl.push("DetailServicePage",{
            ocorrencia:{
              id_ocorrencia:ocorrencia.id_ocorrencia,
              status_id : ocorrencia.status_id
            }
        });
      },
    };
  }

  ngOnInit(){
    this.userId = this.auth.getuserId()
    this.getOcorrencias()
  }

  getOcorrencias(){
    this.ocorrencias.getOccurencesClose(this.userId).subscribe((result) => {
      if(result.success){
        this.params.data = result.data
      }
    })
  }

  doRefresh(refresher) {
    this.ocorrencias.getOccurencesClose(this.userId).subscribe((result) => {
      if(result.success){
        refresher.complete();
        this.params.data = result.data
      }
    })

  }
}
