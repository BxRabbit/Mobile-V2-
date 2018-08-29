import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage, CalculatorPage, LoginPage, TabsPage, EditPage, LibraryPage, PrincipalPage, HttpModule,
  DoPoollPage, SeePollPage, ResultpollsPage, ConsultaProvider } from '../pages/index.paginas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthSevice } from '../services/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CalculatorPage,
    DoPoollPage,
    ResultpollsPage,
    SeePollPage,
    PrincipalPage,
    EditPage,
    LibraryPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
        platforms: {
          android: {
            tabsPlacement: 'bottom'
          },
          ios: {
            tabsPlacement: 'bottom'
          },
          windows:
          {
            tabsPlacement: 'bottom'
          }
        }
      })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DoPoollPage,
    SeePollPage,
    CalculatorPage,
    ResultpollsPage,
    EditPage,
    PrincipalPage,
    LibraryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    AuthSevice,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultaProvider
  ]
})
export class AppModule {}
