import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentService {

  constructor(public http: HttpClient) {
    console.log('Hello StudentService Provider');
  }
  getStudent(){
    return new Promise(resolve =>{
     this.http.get('http://localhost:3000/datos').subscribe(
       data => {
        resolve(data);
       }, err => {
        console.log(err);
       });
    });
    
   // return this.http.get('http://localhost:3000/datos')
  }
  getSchedule(){
    return this.http.get("http://localhost:3000/data");
  }
}
