import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CacheServiceService } from 'src/app/service/cache-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  acountDetails: any;
  constructor(
    private cacheService: CacheServiceService,
    private apiServiceService: ApiServiceService
  ) {

  }

  ngOnInit(): void {
    if (!!this.cacheService.getAccountSummary()) {
      if (this.cacheService.getAccountInView()) {
        this.acountDetails = this.cacheService.getAccountInView();
      }
    } else {
      let url = environment.baseurl + "/dashboard";
      url = "http://localhost:4200/assets/json/dashboard.json";
      this.apiServiceService.callAPI(url).subscribe(data => {
        this.cacheService.setAccountSummary(data.body.response.userAccounts);
        this.cacheService.setAccountInView(data.body.response.userAccounts[0]);
        this.acountDetails = this.cacheService.getAccountInView();
      })
    }
  }




}
