import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheServiceService {

  constructor() { }

  private accountInView: any;
  private accountSummary: any;

  getAccountInView() {
    return this.accountInView;
  }

  setAccountInView(accountDetails: any) {
    this.accountInView = accountDetails;
  }

  getAccountSummary() {
    return this.accountSummary;
  }

  setAccountSummary(data: any) {
    this.accountSummary = data;
  }

}
