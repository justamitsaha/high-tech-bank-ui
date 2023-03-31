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
  fileForm = new FormData();
  applicationId: String = '';
  showApplicationForm: boolean = true;
  showEmailOtp: boolean = false;
  showSMSOtp: boolean = false;
  showsuccess: boolean = false;

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

  verifyEmail = new FormGroup({
    eMailOtp: new FormControl('', Validators.required),
  });

  verifySMS = new FormGroup({
    smsOTP: new FormControl('', Validators.required),
  });

  resetForm() {
    this.openAccount.reset();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileForm.append(event.target.id, file);
    }
  }

  applyForOpenAccount() {
    let url = environment.baseurl + "/onBoardingService/public/applyToOpenAccount";
    let methodType = 'POST';
    const blobOverrides = new Blob([JSON.stringify(this.openAccount.value)], {
      type: 'application/json',
    });
    if (environment.isLocal) {
      url = 'http://localhost:4200/assets/json/applyForAccount.txt';
      methodType = 'GET';
    }
    this.fileForm.append("onboardUser", blobOverrides);
    this.apiService.apiCall(url, methodType, this.fileForm, 'text')
      .subscribe(response => {
        this.applicationId = response.body;
        this.showApplicationForm = false;
        this.showEmailOtp = false;
        this.showsuccess = false;
        this.showSMSOtp = true;
      });
  }

  verifyOtp(event: any) {
    let url = environment.baseurl + "/onBoardingService/public/validateOtp";
    let methodType = 'PUT';
    if (environment.isLocal) {
      url = 'http://localhost:4200/assets/json/applyForAccount.txt';
      methodType = 'GET';
    }
    let optType = (event.target.id == 'smsOTP') ? 'SMS_TYPE_OTP' : 'EMAIL_TYPE_OTP';
    let otp = (event.target.id == 'smsOTP') ? this.verifySMS.value.smsOTP : this.verifyEmail.value.eMailOtp
    var payload = {
      "applicationId": this.applicationId,
      "otp": otp,
      "type": optType
    };
    this.apiService.apiCall(url, methodType, payload, 'text')
      .subscribe(response => {
        if ((event.target.id == 'smsOTP')) {
          this.showApplicationForm = false;
          this.showEmailOtp = true;
          this.showsuccess = false;
          this.showSMSOtp = false;
        } else {
          this.showApplicationForm = false;
          this.showEmailOtp = false;
          this.showsuccess = true;
          this.showSMSOtp = false;
        }
      });
  }

}
