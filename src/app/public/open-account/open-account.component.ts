import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hiTechBankConstants } from 'src/app/constants/constants';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.scss']
})


export class OpenAccountComponent implements OnInit {
  stateList: any;
  accountTypes: any;

  constructor(
    private apiService: ApiServiceService
  ) {

  }

  ngOnInit(): void {
    this.stateList = hiTechBankConstants.STATE_LIST;
    this.accountTypes = hiTechBankConstants.ACCOUNT_TYPE_LIST;
  }


  openAccount = new FormGroup({
    accountType: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    pan: new FormControl('', Validators.required),
    address1: new FormControl('', Validators.required),
    address2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9 ]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9 ]*')])
    // addressProof: new FormControl('', Validators.required),
    // agePfoof: new FormControl('', Validators.required),
    // photo: new FormControl('', Validators.required)
  });

  resetForm() {
    this.openAccount.reset();
  }

  applyForOpenAccount() {
    let url = environment.baseurl + "/onboarding/public/applyToOpenAccount";
    //url = "http://localhost:4200/assets/json/applyForAccount.json";
    this.apiService.nonSecurePost(url, this.openAccount.value).subscribe(response => {
      debugger;
    })
  }

}
