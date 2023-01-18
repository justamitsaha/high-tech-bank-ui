import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  login(payload: any) {
    return this.http.post(environment.baseurl + "/authenticate", payload, { observe: 'response' });
  }

  login2(data: any) {
    return this.http.post(environment.baseurl + "/authenticate", data)
  }

}
