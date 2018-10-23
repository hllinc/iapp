import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LiveBroadcastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-liveBroadcast',
  templateUrl: 'liveBroadcast.html',
})
export class LiveBroadcastPage {
  strUrl:string;
  medio:HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.strUrl = 'http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveBroadcastPage');
  }
  ionViewDidEnter(){
    this.medio = document.getElementById("vidioID");
    //在这里就可以添加相应的代码对medio进行控制了
  }

}
