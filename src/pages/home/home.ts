import {Component} from '@angular/core';
import {App, ModalController, NavController, ViewController} from 'ionic-angular';
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public appCtrl: App, public viewCtrl: ViewController) {
    this.initData();
  }

  initData() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: i,
        src: "assets/imgs/img1.jpg",
        title: "My Neighbor Totoro-" + i,
        info: "Hayao Miyazaki • 1988"
      });
    }
  }

  viewDetail(item: any) {
    this.appCtrl.getRootNav().push(DetailPage, {item: item});
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      const oldLength = this.items.length;
      for (let i = 0; i < 10; i++) {
        this.items.push({
          id: oldLength + i,
          src: "assets/imgs/img1.jpg",
          title: "My Neighbor Totoro-" + (oldLength + i),
          info: "Hayao Miyazaki • 1988"
        });
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
