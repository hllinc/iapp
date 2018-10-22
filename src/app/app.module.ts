import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {CommunityPage} from '../pages/community/community';
import {MyPage} from '../pages/my/my';
import {RecordPlayPage} from '../pages/recordPlay/recordPlay';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WelcomePage} from '../pages/welcome/welcome';
import {IonicStorageModule} from '@ionic/storage';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {SysPage} from '../pages/sys/sys';
import {DetailPageModule} from "../pages/detail/detail.module";
import {LiveBroadcastPage} from "../pages/liveBroadcast/liveBroadcast";
import {Camera} from "@ionic-native/camera";
import {MapPageModule} from "../pages/map/map.module";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    SysPage,
    CommunityPage,
    MyPage,
    RecordPlayPage,
    TabsPage,
    LiveBroadcastPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    DetailPageModule,
    MapPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    SysPage,
    CommunityPage,
    MyPage,
    RecordPlayPage,
    TabsPage,
    LiveBroadcastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {
}
