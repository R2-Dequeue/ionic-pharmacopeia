import { Component } from '@angular/core';
import { /* IonicPage,  */NavController/*, NavParams*/ } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { SettingsPage } from '../settings/settings';
//import { TreeContentPage } from '../tree-content/tree-content';
import { TabsPage } from '../tabs/tabs';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pharmObject: FirebaseObjectObservable<any>;
  data = {};

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  constructor(public db: AngularFireDatabase, public navCtrl: NavController) {
    this.pharmObject = db.object('/documents/pharmacopeia');
    this.pharmObject.$ref.on('value', snapshot => this.data = snapshot.val());
    // enable button here
  }

  navContent() {
    //this.navCtrl.push(TreeContentPage, { content: this.data });
    this.navCtrl.push(TabsPage, { content: this.data });
  }

  navSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }
}
