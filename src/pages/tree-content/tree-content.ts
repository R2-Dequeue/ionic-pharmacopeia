import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseObjectObservable } from 'angularfire2/database';

import { ContentProvider } from '../../providers/content/content';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public content: ContentProvider) {
    this.title = navParams.data['content']['title'];
    this.items = navParams.data['content']['items'];
    this.data = navParams.data['content']['dataHTML'];
  }

  descend(item) {
    this.navCtrl.push(TreeContentPage, { content: item });
  }

  logObject() {
    console.log(this.navCtrl);
  }

}
