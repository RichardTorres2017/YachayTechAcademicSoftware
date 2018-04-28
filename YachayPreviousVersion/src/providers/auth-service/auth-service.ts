import { Injectable } from '@angular/core';
import {TokenParams} from './TokenParams';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Headers, Http, HttpModule} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiURL = 'http://172.20.0.87:8081/api/v1/token/generar-token';
//AccessToken: string = "";
@Injectable()
export class AuthServiceProvider {
 
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }/*
  private TokenAPI = 'http://172.20.0.87:8081/api/v1/token/generar-token';
  login(Username: string, Password: string):Observable<TokenParams>{

    var headersForTokenAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    var data = "grant_type=password&username="+Username+"&password="+Password;
    return this.http.post(this.TokenAPI,data,{headers: headersForTokenAPI})
      .map(res => res.json());
  }*/

  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiURL, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
