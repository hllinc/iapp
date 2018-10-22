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
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav;
  rootPage: any = TabsPage;
  base64Image;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController, public storage: Storage, public menu: MenuController, private camera: Camera) {
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

  openCamera(){
    console.log("打开摄像头");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      // destinationType: this.camera.DestinationType.FILE_URI,// 这里要根据不同平台切换以提高效率，ios为FILE_URI，android为NATIVE_URI，否则app可能会因内存溢出而闪退
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.base64Image = imageData;
      // console.log("获取的图片："+this.base64Image);
    }, (err) => {
      // Handle error
    });
  }
}
