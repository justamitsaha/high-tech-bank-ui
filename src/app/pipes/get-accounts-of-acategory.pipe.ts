import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAccountsOfACategory'
})
export class GetAccountsOfACategoryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
