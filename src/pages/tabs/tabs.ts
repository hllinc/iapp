import { Component } from '@angular/core';

import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  mapTab = "MapPage"; // 我要接单
  orderTab = "OrderPage"; // 我的订单
  communityTab = "CommunityPage"; // 社圈
  liveBroadcastTab = "LiveBroadcastPage"; // 直播
  myTab = "MyPage"; // 我的

  constructor() {

  }
}
