import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
    let responseSubject = new Subject<any>();
    if (callType === 'GET') {
      this.http.get(
        url,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': "" + this.cookieService.get('Authorization'),
            'x-requested-with': 'XMLHttpRequest'
          },
          observe: 'response',
          withCredentials: true,
          responseType: 'text',

        }).pipe()
        .subscribe(
          (data) => {
            responseSubject.next(data);
          },
          (error) => {
            responseSubject.error(error);
          });
    } else if (callType === 'POST') {
      this.http.post(
        url,
        payload,
        {
          observe: 'events',
          responseType: 'text'
        }).pipe()
        .subscribe(
          (data) => {
            responseSubject.next(data);
          },
          (error) => {
            responseSubject.error(error);
          });;
    } else {
      responseSubject.error(null);
    }

    return responseSubject;
  }
}
