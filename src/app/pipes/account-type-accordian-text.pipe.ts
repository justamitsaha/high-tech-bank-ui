import { Pipe, PipeTransform } from '@angular/core';
import { hiTechBankConstants } from '../constants/constants';

@Pipe({
  name: 'accountTypeAccordianText'
})
export class AccountTypeAccordianTextPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let accountType = hiTechBankConstants.ACCOUNT_TYPES;
    return (accountType as any)[value];
  }

}
