import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'titlepage'})
export class TitlePage implements PipeTransform {
  transform(value: any, args: string[]): any {
    if (!value) return value;

    if(value == 1){
      return 'Atendimento'
    }else if(value == 2){
      return 'Atendimento Finalizado'
    }else if(value == 3){
      return 'Atendimento Notificado'
    }else{
      return "Atendimento"
    }

  }
}
