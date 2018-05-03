import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SubjectsPage } from '../subjects/subjects';
import { SchedulePage } from '../schedule/schedule';
import { StudentService } from '../../providers/student-service/student-service';
import { Login } from '../login/login';
import {NavParams} from "ionic-angular";
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  studentId: any;
  passToken:string="";
  personaUrl:string="";
  student:any;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public app: App, public studentService : StudentService,public navParams:NavParams) {
      this.passToken = this.navParams.get('token');
      this.personaUrl = this.navParams.get('url');
      this.getStudent();
      this.getInfo(this.studentId);
  }


 /* ionViewDidLoad(){
    console.log(this.navParams.get('token'));
  }*/
  getStudent(){
    this.studentService.getStudent().then(
      (data) => {
        this.studentId = data['data'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  getInfo(studentId:string){
    this.studentService.getInfo(studentId).then(
      (data) => {
        this.student = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  
  /*
  getStudent(){
    this.studentService.getStudent(this.passToken,this.personaUrl).then(
      (data) => {
        this.student = data;
        console.log(this.student);
      },(err)=>{
          this.presentToast("no hubo como");
      });
  }*/

  subjects(){
    this.navCtrl.push(SubjectsPage,this.student);
  }

  schedule(){
    this.navCtrl.push(SchedulePage);
  }

  logout(){
    //Api Token Logout
    // const root = this.app.getRootNav();
    // root.popToRoot();
    this.navCtrl.setRoot(Login);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
}

}
