import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    const modal = this.modalCtrl.create(WelcomePage);
    modal.present();
  }

}
