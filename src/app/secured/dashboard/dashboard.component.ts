import { Component, OnInit, } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  accountResponse: any;
  constructor(
    private apiServiceService: ApiServiceService
  ) {

  }

  ngOnInit(): void {
    let url = environment.baseurl + "/dashboard";
    url = "http://localhost:4200/assets/json/dashboard.json";
    this.apiServiceService.callAPI(url).subscribe(data => {
      this.accountResponse = data.body.response.userAccounts;
    })
  }

  getAccordianType(): String {
    debugger;
    return "Chut"
  }

}
