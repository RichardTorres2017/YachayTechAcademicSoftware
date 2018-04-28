import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Login} from '../../pages/login/login';
//import {TokenParams} from './TokenParams';
import {Headers, Http, HttpModule} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';

/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiURL = 'http://172.20.0.87:8081/api/v1/token/generar-token';
@Injectable()
export class StudentService {
  loading: any;
  token:string;
  AccessToken: string = "";

  constructor(public http: HttpClient,public alertCtrl: AlertController,private loadingController: LoadingController) {
    console.log('Hello StudentService Provider');
    }

    // private TokenAPI = 'http://172.20.0.87:8081/api/v1/token/generar-token';
    // login(Username: string, Password:string): Observable<Token>{
    //     ret
    // }

  /*private TokenAPI = 'http://172.20.0.87:8081/api/v1/token/generar-token';
  login(Username: string, Password: string):Observable<TokenParams>{

    var headersForTokenAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    var data = "grant_type=password&username="+Username+"&password="+Password;
    return this.http.post(this.TokenAPI,data,{headers: headersForTokenAPI})
      .map(res => res.json());
  }*/



  getStudent(){
    this.loading  = this.loadingController.create({
      content: 'Cargando asignaturas, espere...'
  });
    this.loading.present();
    return new Promise(resolve =>{

     this.http.get('http://localhost:3000/datos').subscribe(
       data => {
        resolve(data);
        this.loading.dismiss()
       }, err => {
        console.log(err);
        if(!err.ok){

          this.loading.dismiss();
          this.showAlert();
        }
       });
    });

   // return this.http.get('http://localhost:3000/datos')
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'No Internet!',
      subTitle: 'Please connect!',
      buttons: ['OK']
    });
    alert.present();
  }


 /* getSchedule(){
    return this.http.get("http://localhost:3000/data");
  }*/
}
