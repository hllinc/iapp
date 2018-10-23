import { Component } from '@angular/core';

import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  recordPlayTab = "RecordPlayPage"; // 录播
  communityTab = "CommunityPage"; // 社圈
  liveBroadcastTab = "LiveBroadcastPage"; // 直播
  tab4Root = "MapPage";
  myTab = "MyPage"; // 我的

  constructor() {

  }
}
