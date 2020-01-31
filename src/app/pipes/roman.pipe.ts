import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roman'})
export class toRoman implements PipeTransform {
  transform(value: any): any {
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    Object.keys(lookup).forEach(i => {
      while ( value >= lookup[i] ) {
        roman += i;
        value -= lookup[i];
      }
    });
    return roman;
  }
}