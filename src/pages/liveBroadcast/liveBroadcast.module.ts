import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {LiveBroadcastPage} from "./liveBroadcast";

@NgModule({
  declarations: [
    LiveBroadcastPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveBroadcastPage),
  ],
})
export class LiveBroadcastPageModule {}
