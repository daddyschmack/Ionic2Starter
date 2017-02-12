import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule} from 'angularfire2';

var firebaseConfig = {
  apiKey: "AIzaSyCHPrNk3-fLPv-HMg-0mHNz2HNG8F6GzIw",
  authDomain: "angfire2tut.firebaseapp.com",
  databaseURL: "https://angfire2tut.firebaseio.com",
  storageBucket: "angfire2tut.appspot.com",
  messagingSenderId: "572183348048"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
