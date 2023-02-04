import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  formChange = {
    username: false,
    password: false
  }


  constructor(
    private apiServiceService: ApiServiceService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void { }

  onFormChange(event: any): void {
    if (event.target.id == "username") {
      this.formChange.username = true
    } else if (event.target.id == "password") {
      this.formChange.password = true
    }
  }


  login(): void {
    let payload = {
      'username': this.loginForm.value.username,
      'password': this.loginForm.value.password
    };

    let url = environment.baseurl + "/authentication/public/authenticate";
    this.apiServiceService.apiCall(url, 'POST', this.loginForm.value)
      .subscribe(response => {
        let auth = response.headers.get('Authorization')!;
        this.cookieService.set("Authorization", auth);
        //window.sessionStorage.setItem("Authorization", auth);
        this.router.navigate(['/secure/accounts/dashboard']);
      });

  }

}
