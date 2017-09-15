import { Component } from '@angular/core';
import { /* IonicPage,  */NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';// `asyncStorage` on pc

//@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  private debugComponent: boolean = false;
  public settings: any = { showBetaDocs: false };

  /**
   * 
   * @param navCtrl 
   * @param navParams 
   * @param storage 
   * 
   * @todo Iterate over `val` and insert values into `settings'.
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.ready().then(() => {
      storage.get('settings').then((val) => {
        if (val) {
          let parsed = JSON.parse(val);

          if (parsed)
            this.settings = parsed;
        }
      });
    });
  }
  
  private toggleBetaDocs() {
    this.storage.ready().then(() => {
      this.storage.set('settings', JSON.stringify(this.settings));
    });
  }

  private logSettings() {
    this.storage.ready().then(() => {
      this.storage.get('settings').then((val) => {
        console.log('Settings: ');
        console.log(val);
      });
    });
  }

  private clearLocalStorage(): Promise<null> {
    return this.storage.clear();
  }

}
