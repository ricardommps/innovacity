import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'addressnumber'})
export class AddressNumber implements PipeTransform {
  transform(value: any, args: string[]): any {
    if (!value) return value;
    var strReturn = ""
    console.log(value)
    if(value.numero){
      strReturn = strReturn + " Nº: "+value.numero
    }

    if(value.quadra){
      if(strReturn.length == 0){
        strReturn = strReturn + "Quad.: "+value.quadra
      }else{
        strReturn = strReturn + " / Quad.: "+value.quadra
      }

    }

    if(value.lote){
      if(strReturn.length == 0){
        strReturn = strReturn + "Lot.: "+value.lote
      }else{
        strReturn = strReturn + " / Lot.: "+value.lote
      }
    }

    if(strReturn.length == 0){
      strReturn = "-"
    }

    return strReturn
  }
}
