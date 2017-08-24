import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { TreeContentPage } from '../tree-content/tree-content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pharmObject: FirebaseObjectObservable<any>;
  data = {};

  constructor(public db: AngularFireDatabase, public navCtrl: NavController) {
    this.pharmObject = db.object('/pharm_test_3/documents');
    this.pharmObject.$ref.on('value', snapshot => this.data = snapshot.val());
    // enable button here
  }

  openPharmacopeia() {
    this.navCtrl.push(TreeContentPage, { content: this.data });
  }
}
