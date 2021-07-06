import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
  transform(value: Array<number>) {
    console.log('ARR: ', value);
    return value.filter((num) => num > 5);
  }
}
