import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//  Import Rest Provider
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subjects: any;
  //  Inject public restProvider: RestProvider
  constructor(public navCtrl: NavController,public restProvider: RestProvider) {
    // Call the function getSubjects  
    this.getSubjects();
  }
  // Function for calling the getSubjects from the provider rest
  getSubjects() {
    this.restProvider.getSubjects()
    .then(data => {
      this.subjects = data;
      console.log(this.subjects);
    });
  }
}
