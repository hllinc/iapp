import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestPage} from "./pages/test/test";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// gaode map
declare var AMap;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map2') map_container2: ElementRef;
  map: any;//地图对象

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  ionViewDidEnter() {
    this.load();
  }
  load(){
    this.map = new AMap.Map(this.map_container2.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        center:[116.388806,39.903936],
        zoom: 10, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
  }

  openTest(){
    this.navCtrl.push(TestPage);
  }

}
