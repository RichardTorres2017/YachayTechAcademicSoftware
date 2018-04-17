import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SubjectsPage } from '../pages/subjects/subjects';
import { SchedulePage } from '../pages/schedule/schedule';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from '../providers/student-service/student-service'

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubjectsPage,
    SchedulePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubjectsPage,
    SchedulePage
  ],
  providers: [
    StatusBar,
    StudentService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
