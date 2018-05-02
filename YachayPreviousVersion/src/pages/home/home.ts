import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SubjectsPage } from '../subjects/subjects';
import { SchedulePage } from '../schedule/schedule';
import { StudentService } from '../../providers/student-service/student-service';
import { Login } from '../login/login';
import {NavParams} from "ionic-angular";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  student: any;
  passToken:string="";
  personaUrl:string="";
  constructor(public navCtrl: NavController, public app: App, public studentService : StudentService,public navParams:NavParams) {
      this.passToken = this.navParams.get('token');
      this.personaUrl = this.navParams.get('url');
      this.getStudent();
  }


 /* ionViewDidLoad(){
    console.log(this.navParams.get('token'));
  }*/
  /*ionViewDidLoad(){
    this.studentService.getStudent().subscribe(
      (data) => {
        this.student = data['1'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }*/

  getStudent(){
    this.studentService.getStudent(this.passToken,this.personaUrl).then(
      (data) => {
        this.student = data;
        console.log(this.student);
      }/*,(err)=>{
          console.log("no hubo como");
      }*/);
  }

  subjects(){
    this.navCtrl.push(SubjectsPage);
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

}
