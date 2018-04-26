import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, IonicPage, AlertController, ToastController, MenuController, NavParams} from "ionic-angular";

import { HomePage } from '../home/home';
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
  public onRegisterForm: FormGroup;
  auth: string = "login";
  constructor(public navCtrl: NavController, public navParams: NavParams, private _fb: FormBuilder,public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }


  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  login(){
    //Api connections
    this.navCtrl.setRoot(HomePage);
    }

}
