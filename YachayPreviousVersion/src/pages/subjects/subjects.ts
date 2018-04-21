import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, App,IonicPage } from 'ionic-angular';
import { StudentService } from '../../providers/student-service/student-service';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the SubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {

  subjects: any[] = [];

  constructor(public navCtrl: NavController, public app: App, public studentService : StudentService) {
      this.getSubjects();
  }

/*  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectsPage');
  }
*/

 /* 
 
 this was before
 ionViewDidLoad(){
    this.studentService.getStudent().subscribe(
      (data) => {
        this.subjects = data['1'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }*/


  
   /* this.home.getStudent().then(
      data =>{
this.subjects = data['1'];
      });
    this.studentService.getStudent().then(
      data => {
        this.student = data['1'];
        console.log(this.student);
      });*/
     getSubjects(){
      this.studentService.getStudent().then(
        data => {
          this.subjects = data['0'];
          console.log(this.subjects);
        });
      }
}