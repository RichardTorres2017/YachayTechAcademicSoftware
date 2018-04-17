import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SubjectsPage } from '../subjects/subjects';
import { SchedulePage } from '../schedule/schedule';
import { StudentService } from '../../providers/student-service/student-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  student: any[] = [];

  constructor(public navCtrl: NavController, public app: App, public studentService : StudentService) {

  }

  ionViewDidLoad(){
    this.studentService.getStudent().subscribe(
      (data) => {
        this.student = data['1'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  subjects(){
    this.navCtrl.push(SubjectsPage);
  }

  schedule(){
    this.navCtrl.push(SchedulePage);
  }

  logout(){
    //Api Token Logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
