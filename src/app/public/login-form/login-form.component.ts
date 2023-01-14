import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  formChange = {
    userName: false,
    password: false
  }


  constructor(
    private apiServiceService: ApiServiceService
  ) { }

  ngOnInit(): void { }

  onFormChange(event: any): void {
    if (event.target.id == "userName") {
      this.formChange.userName = true
    } else if (event.target.id == "password") {
      this.formChange.password = true
    }
  }

  login(): void {
    let payload = {
      'username': this.loginForm.value.userName,
      'password': this.loginForm.value.password
    };

    this.apiServiceService.login(payload).subscribe(response => {
      debugger;
    })

  }

}
