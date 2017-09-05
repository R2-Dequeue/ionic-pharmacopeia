import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

import { TreeContentPage } from '../pages/tree-content/tree-content';
import { SearchPage } from '../pages/search/search';
import { FavoritesPage } from '../pages/favorites/favorites';

import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { firebaseConfig } from '../assets/authenticate';
import { ContentProvider } from '../providers/content/content';
export { firebaseConfig };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    TreeContentPage,
    SearchPage,
    FavoritesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    TreeContentPage,
    SearchPage,
    FavoritesPage,
    TabsPage // Has to be declared here AND `declarations`
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContentProvider
  ]
})
export class AppModule {}
