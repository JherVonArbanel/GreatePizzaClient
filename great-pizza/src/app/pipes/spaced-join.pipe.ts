import { Pipe, PipeTransform } from '@angular/core';
import { Toping } from '../model/toping';

@Pipe({
  name: 'spacedJoin'
})
export class SpacedJoinPipe implements PipeTransform {

  transform(value: Toping[], args?: any): any {
    if(value === null){
      return "";
    }
    return value.map(x=>x.name).join(', ');;
  }
}