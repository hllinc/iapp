import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html'
})
export class CommunityPage {
  searchQuery: string = '';
  items: string[] = [];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    for (let i = 0; i < 20; i++) {
      this.items.push('列表条目' + i);
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
