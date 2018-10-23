import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {Storage} from '@ionic/storage';
import {AuthProvider} from "../providers/auth";
import {NativeProvider} from "../providers/native";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: Nav;
  rootPage: any = "TabsPage";
  base64Image;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storage: Storage,
    public native: NativeProvider,
    public Auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.storage.get("hasReadWelcomePage").then((hasRead) => {
        if (!hasRead) {
          this.Auth.modalNoData("WelcomePage");
        }
      });
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {

  }

  openLoginPage() {
    this.Auth.modalNoData("LoginPage");
  }

  openRegisterPage() {
    this.Auth.modalNoData("RegisterPage");
  }

  openSysPage() {
    this.Auth.modalNoData("SysPage");
  }

  openCamera() {
    this.native.getPictureByCamera().subscribe(imageBase64 => {
      this.base64Image = imageBase64;
    });
  }
}
