import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public Auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "请稍候...",
      duration: 3000
    });
    loader.onDidDismiss(() => {
      this.viewCtrl.dismiss();
    });
    loader.present();
  }

  toRegister() {
    this.viewCtrl.dismiss();
    this.Auth.modalNoData("RegisterPage");
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
