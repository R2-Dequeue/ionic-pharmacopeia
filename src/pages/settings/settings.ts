import { Component } from '@angular/core';
import { /* IonicPage,  */NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';// `asyncStorage` on pc

//@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public settings: any = { showBetaDocs: false };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.ready().then(() => {
      console.log('`storage` is ready');
      storage.get('showBetaDocs').then((val) => { this.settings.showBetaDocs = val; })
    });
  }
  
  favorite() {
    console.log('`showBetaDocs` when `favorite` called: ' + this.settings.showBetaDocs);

    let temp: Boolean = this.settings.showBetaDocs;
    this.storage.set('showBetaDocs', temp).then(() => {
      this.settings.showBetaDocs = temp;
      console.log('`showBetaDocs` after `set` called: ' + this.settings.showBetaDocs);
    });
  }

  logSettings() {
    this.storage.get('showBetaDocs').then((val) => { console.log('showBetaDocs: ' + val); });
  }

}
