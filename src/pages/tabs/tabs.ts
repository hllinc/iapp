import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CameraPage} from "../camera/camera";
import {MapPage} from "../map/map";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CameraPage;
  tab4Root = MapPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
