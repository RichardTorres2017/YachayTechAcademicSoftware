//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {LoadingController, Platform} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Login} from '../../pages/login/login';
//import {TokenParams} from './TokenParams';
import {Headers, Http, HttpModule} from '@angular/http';

import {HttpHeaders} from '@angular/common/http';
import { Network } from '@ionic-native/network'
/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class StudentService {
  loading: any;
  token:string;
  AccessToken: string = "Bearer ";
  studentURL : string = "";
  apiURL : string = "http://172.20.0.87:8082/api/v1/personas/personaUsuario/";

  constructor(public http: Http,public alertCtrl: AlertController,private loadingController: LoadingController, public platform: Platform,public network: Network) {
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
  /*
  getStudent(token : string, shortUrl : string) {
    this.studentURL = this.apiURL+shortUrl;
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.AccessToken= this.AccessToken+token;
      //console.log(this.AccessToken);
      headers.append('Authorization', this.AccessToken);
      //console.log(headers);
      //console.log(this.studentURL);
      console.log(this.http.get(this.studentURL),{headers:headers});
      this.http.get(this.studentURL, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }*/

  getStudent(){
    /*this.loading  = this.loadingController.create({
      content: 'Cargando asignaturas, espere...'
  });
    this.loading.present();*/
    return new Promise(resolve =>{

     this.http.get('http://my-json-server.typicode.com/RichardTorres2017/jsonfile/datos').subscribe(
       data => {
        resolve(data.json());
        //this.loading.dismiss()
       }, err => {
        console.log(err);
        if(!err.ok){

          //this.loading.dismiss();
          this.showAlert();
        }
       });
    });
  
   // return this.http.get('http://localhost:3000/datos')
  }

  getInfo(studentId:string){
    this.loading  = this.loadingController.create({
      content: 'Cargando asignaturas, espere...'
  });
    this.loading.present();
    return new Promise(resolve =>{

     this.http.get('http://my-json-server.typicode.com/RichardTorres2017/json2/data').subscribe(
       data => {
        resolve(data.json());
        this.loading.dismiss()
       }, err => {
        console.log(err);
        if(!err.ok){

          this.loading.dismiss();
          this.showAlert();
        }
       });
    });
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
