import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentService } from '../../providers/student-service/student-service';


/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  //schedule: any[] =[];
  //schedule2: any[] = [];
  schedule: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public studentService : StudentService) {
    this.schedule = this.navParams.get('semestresAcademicos');
    //this.getSchedule();
    console.log(this.schedule);
  }

 // ionViewDidLoad() {
   // console.log('ionViewDidLoad SchedulePage');
    /*this.studentService.getStudent().then(
      (data) =>{
        this.schedule = data['0'];
      },
      (error) =>{
        console.error(error);
      }
    )*/
  //}
  /*
  getSchedule(){
    this.studentService.getStudent().then(
      (data) =>{
        this.schedule = data['0'];
      },
      (error) =>{
        console.error(error);
      }
    )
    
    
  }

}
export class Schedule{
  day: string;
  hour: string;
  place: string;
  //subject: Subject;
  constructor(){

  }
  getDay():string{
    //var student = new Student();
    //var idstudente = student.getId();
    //if ()
    return this.day;
  }
  getHour():string{
    return this.hour;
  }
  getPlace():string{
    return this.place;
  }
 /* getSchedule(): subject{
    return this.subject;
  }*/
}
