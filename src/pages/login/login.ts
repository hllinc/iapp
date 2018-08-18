import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "请稍候...",
      duration: 3000
    });
    loader.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Hello, kid!',
      subTitle: 'Kid kid kid kid!!!!!!',
      buttons: ['OK']
    });
    alert.present();
  }

}
