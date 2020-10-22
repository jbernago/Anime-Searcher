import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {


  transform(value: unknown): unknown {
    let paginator = [];
    for(let i = 1; i<=value; i++){
      paginator.push(i);
    }

    
    return paginator;
  }

}
