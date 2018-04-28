import {Component} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, IonicPage, AlertController, ToastController, MenuController, NavParams} from "ionic-angular";
import { HomePage } from '../home/home';
//import {TokenParams} from '../../providers/auth-service/TokenParams';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  public onLoginForm: FormGroup;
  auth: string = "login";
  //tokenParam : TokenParams;
  accessToken:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _fb: FormBuilder,public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, public auth_service:AuthServiceProvider) {
    this.onLoginForm = this._fb.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
    this.auth_service.obtainToken(this.onLoginForm.value.username,this.onLoginForm.value.password).then((result) =>{
    this.accessToken = result;
    console.log(this.accessToken);
    if(this.accessToken){
      this.navCtrl.push(HomePage);
  }
    }, (err) => {
      this.presentToast("Give valid username and password");
    });
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
}

}
