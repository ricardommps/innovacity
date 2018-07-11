import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-autoCompleteMaps',
  templateUrl: 'autoCompleteMaps.html',
})
export class AutoCompleteMapsPage {
  
    autocompleteItems;
    autocomplete;
    service = new google.maps.places.AutocompleteService();
  
    constructor (public viewCtrl: ViewController, private zone: NgZone) {
      this.autocompleteItems = [];
      this.autocomplete = {
        query: ''
      };
    }
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  
    chooseItem(item: any) {
      this.viewCtrl.dismiss(item);
    }
    
    updateSearch() {
      if (this.autocomplete.query == '') {
        this.autocompleteItems = [];
        return;
      }
      let me = this;
      let options = {
        input: this.autocomplete.query,
        language: 'pt-BR',
        componentRestrictions: { country: "br" }
      }
      this.service.getPlacePredictions(options, function (predictions, status) {
        me.autocompleteItems = []; 
        me.zone.run(function () {
          predictions.forEach(function (prediction) {
            me.autocompleteItems.push(prediction.description);
          });
        });
      });
    }

    onClose(){

      this.viewCtrl.dismiss();

    }

}
