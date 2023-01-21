import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CacheServiceService } from 'src/app/service/cache-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  accountResponse: any;
  accountType = new Set();
  constructor(
    private apiServiceService: ApiServiceService,
    private cacheService: CacheServiceService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    if (!!this.cacheService.getAccountSummary()) {
      this.accountResponse = this.cacheService.getAccountSummary();
      this.accountResponse.forEach((item: { type: unknown; }) => {
        this.accountType.add(item.type);
      });
    } else {
      let url = environment.baseurl + "/dashboard";
      url = "http://localhost:4200/assets/json/dashboard.json";
      this.apiServiceService.callAPI(url).subscribe(data => {
        this.cacheService.setAccountSummary(data.body.response.userAccounts);
        this.accountResponse = data.body.response.userAccounts;
        this.accountResponse.forEach((item: { type: unknown; }) => {
          this.accountType.add(item.type);
        });
      })
    }
  }

  navigateToAccount(account: any): void {
    this.cacheService.setAccountInView(account);
    this.router.navigate(['secure/accounts/details']);
  }

}
