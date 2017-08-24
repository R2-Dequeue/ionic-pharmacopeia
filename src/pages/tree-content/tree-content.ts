import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseObjectObservable } from 'angularfire2/database';

//@IonicPage()
@Component({
  selector: 'page-tree-content',
  templateUrl: 'tree-content.html',
})
export class TreeContentPage {

  pharmObject: FirebaseObjectObservable<any>;
  pharmData = {};

  title: string = '';
  items = undefined;
  data = undefined;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data['content']['title'];
    this.items = navParams.data['content']['items'];
    this.data = navParams.data['content']['dataHTML'];
  }

  descend(item) {
    this.navCtrl.push(TreeContentPage, { content: item });
  }

}
