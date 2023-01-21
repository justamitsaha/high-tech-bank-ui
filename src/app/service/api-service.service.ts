import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  login(payload: any) {
    return this.http.post(
      environment.baseurl + "/authenticate",
      payload,
      {
        observe: 'response',
        responseType: 'text'
      });
  }


  callAPI(url: string, payload?: any): Observable<any> {
    return this.http.get(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Authorization': "" + window.sessionStorage.getItem('Authorization'),
        },
        observe: 'response',
        withCredentials: true,
        responseType: 'json'
      });
  }

}
