import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string): string {
    date = date.slice(0, 10);
    return date;
  }

}
