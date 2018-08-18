import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the SysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sys',
  templateUrl: 'sys.html',
})
export class SysPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SysPage');
  }

  clearStorage(){
    this.storage.clear();
    const alert = this.alertCtrl.create({
      title: '你好',
      subTitle: '本地存储已清空！',
      buttons: ['关闭']
    });
    alert.present();
  }

}
