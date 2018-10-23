import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    public Auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "请稍候...",
      duration: 3000
    });
    loader.onDidDismiss(() => {
      this.viewCtrl.dismiss();
      this.Auth.modalNoData("LoginPage");
    });
    loader.present();
  }

  toLogin() {
    this.viewCtrl.dismiss();
    this.Auth.modalNoData("LoginPage");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
