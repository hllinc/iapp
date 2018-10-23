import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {WelcomePage} from "./welcome";

@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage)
  ],
  entryComponents: [
  ]
})
export class WelcomePageModule {}
