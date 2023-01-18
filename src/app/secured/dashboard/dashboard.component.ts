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
    this.http.get(environment.baseurl + "/dashboard", { observe: 'response', withCredentials: true }).subscribe(response => {
      debugger;
    });
  }

}
