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
  schedule: any[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public studentService : StudentService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
    this.studentService.getSchedule().subscribe(
      (data) =>{
        this.schedule = data['0'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
