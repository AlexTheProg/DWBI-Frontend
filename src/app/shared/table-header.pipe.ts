import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableHeader'
})
export class TableHeaderPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('_', ' ');
  }

}
