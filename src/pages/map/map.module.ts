import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import {TestPage} from "./pages/test/test";

@NgModule({
  declarations: [
    MapPage,
    TestPage
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
  ],
  entryComponents: [
    TestPage
  ]
})
export class MapPageModule {}
