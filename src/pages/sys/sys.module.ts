import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {SysPage} from "./sys";

@NgModule({
  declarations: [
    SysPage
  ],
  imports: [
    IonicPageModule.forChild(SysPage)
  ],
  entryComponents: [
  ]
})
export class SysPageModule {}
