import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseObjectObservable } from 'angularfire2/database';

import { ContentProvider } from '../../providers/content/content';

import { HomePage } from '../home/home';

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

  private favoriteStatusIcon: String = 'star-outline';
  private showHome: Boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public content: ContentProvider) {
    this.title = navParams.data['content']['title'];
    this.items = navParams.data['content']['items'];
    this.data = navParams.data['content']['dataHTML'];

    this.showHome = (navCtrl.length() === 0);
  }

  descend(item) {
    this.navCtrl.push(TreeContentPage, { content: item });
  }

  navHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  favoriteThisPage() {
    if (this.favoriteStatusIcon === 'star-outline') {
      this.favoriteStatusIcon = 'star';
    } else {
      this.favoriteStatusIcon = 'star-outline';
    }
  }

  logObject() {
    //console.log(this.navCtrl);
    this.content.logNavStatus(this.navCtrl);
  }

}
