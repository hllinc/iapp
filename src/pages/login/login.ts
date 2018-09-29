import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";

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
    loader.onDidDismiss(()=>{
      this.navCtrl.popToRoot();
    });
    loader.present();
  }

  toRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
