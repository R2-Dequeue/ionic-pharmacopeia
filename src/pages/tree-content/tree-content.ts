import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  private favoriteStatusIcon: String = 'star-outline';

  constructor(public navCtrl: NavController, public navParams: NavParams, public content: ContentProvider, private storage: Storage) {
    this.title = navParams.data['content']['title'];
    this.items = navParams.data['content']['items'];
    this.data = navParams.data['content']['dataHTML'];

    //storage.ready().then(() => console.log('Storage driver being used: ' + storage.driver));// `asyncStorage` on pc
  }

  descend(item) {
    this.navCtrl.push(TreeContentPage, { content: item });
  }

  navHomePage() {}

  favoriteThisPage() {
    if (this.favoriteStatusIcon === 'star-outline') {
      this.favoriteStatusIcon = 'star';
    } else {
      this.favoriteStatusIcon = 'star-outline';
    }
  }

  logObject() {
    console.log(this.navCtrl);
  }

}
