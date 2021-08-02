import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initUpperCase'
})
export class InitUpperCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof(value) === 'string') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return null;
  }

}
