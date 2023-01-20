import { Pipe, PipeTransform } from '@angular/core';
import { hiTechBankConstants } from '../constants/constants';

@Pipe({
  name: 'accountTypeAccordianText'
})
export class AccountTypeAccordianTextPipe implements PipeTransform {

  accoutType = {
    "savings": "Savings Account",
    "fd": "Fixed Deposits",
    "checking": "Checking Accounts",
    "loans": "Loans",
    "demat": "Demat Account",
    "investments": "Investment Accounts"
  }

  transform(value: any, ...args: unknown[]): unknown {
    let accountType = hiTechBankConstants.ACCOUNT_TYPES;
    let key = (Object.keys(value)[0]);
    console.log(Object.keys(value)[0]);
    return (accountType as any)[key];
  }

}
