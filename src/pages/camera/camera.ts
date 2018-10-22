import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  strUrl:string;
  medio:HTMLElement;
  base64Image;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.strUrl = 'http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }
  ionViewDidEnter(){
    this.medio = document.getElementById("vidioID");
    //在这里就可以添加相应的代码对medio进行控制了
  }

  openCamera(){
    console.log("打开摄像头");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      // console.log("获取的图片："+this.base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
