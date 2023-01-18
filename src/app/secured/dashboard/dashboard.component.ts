import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.http.get(
      environment.baseurl + "/dashboard",
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Authorization': "" + window.sessionStorage.getItem('Authorization'),
        },
        observe: 'response',
        withCredentials: true,
        responseType: 'text'
      }
    ).subscribe(response => {
      debugger;
    });
  }

}
