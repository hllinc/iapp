import { Component } from '@angular/core';

import { CommunityPage } from '../community/community';
import { MyPage } from '../my/my';
import { RecordPlayPage } from '../recordPlay/recordPlay';
import {LiveBroadcastPage} from "../liveBroadcast/liveBroadcast";
import {MapPage} from "../map/map";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  recordPlayTab = RecordPlayPage; // 录播
  communityTab = CommunityPage; // 社圈
  liveBroadcastTab = LiveBroadcastPage; // 直播
  tab4Root = MapPage;
  myTab = MyPage; // 我的

  constructor() {

  }
}
