import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intimate',
  templateUrl: 'intimate.html',
})
export class IntimatePage {
  params: any = {
    events:{},
    data:null
  };
  intimatesSelected:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
    this.params.events = {
      'onClose': function(service: any) {
        console.log('onClose');
        viewCtrl.dismiss(this.intimatesSelected );
      },
      'onSaveViolations': function(item: any) {
        console.log(">>onSaveViolations",item);
        viewCtrl.dismiss(item);
      },
      'onSelectIntimate':function (intimate) {
        this.intimatesSelected = intimate
      },
    }
  }

  ngOnInit(){
    this.params.data = this.navParams.get('intimates') ? this.navParams.get('intimates') : {};
    console.log('>>>PARAMS>>',this.params)
  }



}
