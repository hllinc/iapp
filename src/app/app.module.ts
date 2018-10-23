import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import {Camera} from "@ionic-native/camera";
import {UtilsProvider} from "../providers/utils";
import {ComponentsModule} from "../components/components.module";
import {AuthProvider} from "../providers/auth";
import {HttpProvider} from "../providers/http";
import {PopProvider} from "../providers/pop";
import {LoggerProvider} from "../providers/logger";
import {NativeProvider} from "../providers/native";
import {PincodeInputModule} from "ionic2-pincode-input";
import {HttpClientModule} from "@angular/common/http";
import {ImagePicker} from "@ionic-native/image-picker";
import {AppVersion} from "@ionic-native/app-version";
import {GlobalDataProvider} from "../providers/globalData";
import {File} from "@ionic-native/file";
import {FileTransfer} from "@ionic-native/file-transfer";
import {Network} from "@ionic-native/network";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    PincodeInputModule,
    // 配置项：tabsHideOnSubPages用于控制由主页面进入子页面是的底部导航的隐藏和现实
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      backButtonText: '返回',
      swipeBackEnabled: 'true',
      mode: 'ios'
    }),
    IonicStorageModule.forRoot({
      name: 'myApp',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    ImagePicker,
    AppVersion,
    File,
    FileTransfer,
    Network,
    UtilsProvider,
    AuthProvider,
    HttpProvider,
    PopProvider,
    LoggerProvider,
    GlobalDataProvider,
    NativeProvider
  ]
})
export class AppModule {
}
