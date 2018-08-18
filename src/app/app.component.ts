import {Component, ViewChild} from '@angular/core';
import {MenuController, ModalController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {SysPage} from '../pages/sys/sys';
import {WelcomePage} from '../pages/welcome/welcome';
import {Storage} from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav;
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController, public storage: Storage, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.storage.get("hasReadWelcomePage").then((hasRead) => {
        if (!hasRead) {
          const modal = this.modalCtrl.create(WelcomePage);
          modal.present();
        }
      });
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {

  }

  openLoginPage() {
    this.nav.push(LoginPage);
    this.menu.toggle()
  }

  openRegisterPage(){
    this.nav.push(RegisterPage);
    this.menu.toggle();
  }

  openSysPage(){
    this.nav.push(SysPage);
    this.menu.toggle();
  }
}
