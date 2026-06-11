import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rupee' })
export class RupeePipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    return '₹' + value.toLocaleString('en-IN');
  }
}
