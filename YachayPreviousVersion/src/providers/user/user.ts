import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
