import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "请稍候...",
      duration: 3000
    });
    loader.onDidDismiss(()=>{
      this.navCtrl.popTo(LoginPage);
    });
    loader.present();
  }

  toLogin(){
    this.navCtrl.push(LoginPage);
  }

}
