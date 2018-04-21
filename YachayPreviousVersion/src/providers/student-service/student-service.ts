import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentService {
  constructor(public http: HttpClient,public alertCtrl: AlertController) {
    console.log('Hello StudentService Provider');
  }
  getStudent(){
    return new Promise(resolve =>{
     this.http.get('http://localhost:3000/datos').subscribe(
       data => {
        resolve(data);
       }, err => {
        console.log(err);
        if(!err.ok){
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
