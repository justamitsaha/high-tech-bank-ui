import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  apiCall(url: string, callType: String, payload?: any): Observable<any> {
    if (callType === 'GET') {
      return this.http.get(
        url,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': "" + this.cookieService.get('Authorization'),
          },
          observe: 'response',
          withCredentials: true,
          responseType: 'text'
        });
    } else if (callType === 'POST') {
      return this.http.post(
        url,
        payload,
        {
          observe: 'response',
          responseType: 'text'
        });
    } else {
      return of(null);
    }
  }
}
