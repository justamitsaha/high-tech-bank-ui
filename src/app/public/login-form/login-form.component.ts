import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

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
    private router: Router
  ) { }

  ngOnInit(): void { }

  onFormChange(event: any): void {
    if (event.target.id == "username") {
      this.formChange.username = true
    } else if (event.target.id == "password") {
      this.formChange.password = true
    }
  }

  onSubmit(data: any): void {
    this.apiServiceService.login2(data).subscribe(result => {
      debugger;
    });
  }

  login(): void {
    let payload = {
      'username': this.loginForm.value.username,
      'password': this.loginForm.value.password
    };

    this.apiServiceService.login(this.loginForm.value).subscribe(response => {
      let xsrf = response.headers.get('XSRF-TOKEN');
      let auth = response.headers.get('Authorization');
      let x = response.headers.get('Content-Type');
      let y = response.headers.get('Set-Cookie');
      this.router.navigate(['/dashboard']);
    })

  }

}
