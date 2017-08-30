import { Component } from '@angular/core';
import { /* IonicPage,  */NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public settings: any = { showBetaDocs: false };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
