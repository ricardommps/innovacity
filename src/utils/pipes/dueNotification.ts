import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duenotification'})
export class DueNotification implements PipeTransform {
  transform(value: any, args: string[]): any {
    if (!value) return value;
    if(!value.days){
      return 'Notificação irá vencer hoje'
    }
    var nValue = parseInt(value.days)
     if(nValue > 0 ){
      return 'Notificação vence em ' + value.days + ' dias'
    }else{
      return 'Notificação vencida à ' + value.days.toString().split('-')[1] + ' dias'
    }

  }
}
