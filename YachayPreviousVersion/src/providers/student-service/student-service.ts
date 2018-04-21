import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {LoadingController } from 'ionic-angular';
/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentService {
  loading: any;
  constructor(public http: HttpClient,public alertCtrl: AlertController,private loadingController: LoadingController) {
    console.log('Hello StudentService Provider');
    
    
  
  }
 

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
