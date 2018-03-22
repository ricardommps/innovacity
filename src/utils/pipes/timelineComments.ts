import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'comment'})
export class TimelineComments implements PipeTransform {
  transform(value: any, args: string[]): any {
    var result = ""
    if (!value) return value;
    if(value.indexOf('|') == -1){
     result = `<h2 card-title margin-bottom>${value}</h2>`
      return result
    }else{
      var comment =  value.split('|')
      var htmlItem = ""
      comment.map(function(item) {
        htmlItem = `<h2 card-title margin-bottom>${item}</h2>`
        result = result + htmlItem
      });
      return result
    }



  }
}
