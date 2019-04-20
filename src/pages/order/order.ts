import { Component } from '@angular/core';
import {App, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  items: any = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public appCtrl: App,
    public viewCtrl: ViewController) {
    this.initData();
  }

  initData() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: i,
        src: "assets/imgs/img1.jpg",
        title: "初中数学课程" + i,
        info: "2018-9-22 中原市第一中学教研处",
        detail: "新一轮中考复习备考周期正式开始，中考网为各位初三考生整理了各学科的复习攻略，主要包括中考必考点、中考常考知识点、各科复习方法、考试答题技巧等内容，帮助各位考生梳理知识脉络，理清做题思路，希望各位考生可以在考试中取得优异成绩！"
      });
    }
  }

  viewDetail(item: any) {
    this.navCtrl.push("DetailPage", {item: item});
    // this.Auth.modalWidthData("DetailPage", {item: item});
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      const oldLength = this.items.length;
      for (let i = 0; i < 10; i++) {
        this.items.push({
          id: oldLength + i,
          src: "assets/imgs/img1.jpg",
          title: "初中数学课程" + (oldLength + i),
          info: "2018-9-22 中原市第一中学教研处",
          detail: "新一轮中考复习备考周期正式开始，中考网为各位初三考生整理了各学科的复习攻略，主要包括中考必考点、中考常考知识点、各科复习方法、考试答题技巧等内容，帮助各位考生梳理知识脉络，理清做题思路，希望各位考生可以在考试中取得优异成绩！"
        });
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
