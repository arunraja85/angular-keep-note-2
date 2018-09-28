import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { headersToString } from '../../../node_modules/@types/selenium-webdriver/http';

@Injectable()
export class AuthenticationService {

  private authURL: string = " http://localhost:3000/auth/v1";

  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpClient.post(this.authURL,data);
  }

  setBearerToken(token) {
    return null;
  }

  getBearerToken() {
    return null;
  }

  private headers: HttpHeaders = new HttpHeaders();
  isUserAuthenticated(token): Promise<boolean> {
   
    this.headers.set("Authorization","Bearer "+token);
    return this.httpClient.post(this.authURL+"isAuthenticated",null,this.headers);
  }
}
