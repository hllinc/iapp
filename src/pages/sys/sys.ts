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
    let conform = this.alertCtrl.create({
      title: '确定清空本地存储吗？',
      message: '点击确定按钮本地存储将被清空。',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.storage.clear();
            const alert = this.alertCtrl.create({
              title: '你好',
              subTitle: '本地存储已清空！',
              buttons: ['关闭']
            });
            alert.present();
          }
        }
      ]
    });
    conform.present();
  }

}
