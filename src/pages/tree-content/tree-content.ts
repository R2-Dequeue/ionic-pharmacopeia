import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ContentProvider } from '../../providers/content/content';

import { HomePage } from '../home/home';

//@IonicPage()
@Component({
  selector: 'page-tree-content',
  templateUrl: 'tree-content.html',
})
export class TreeContentPage {
  private debugComponent: boolean = false;
  
  private title: string = '';
  private items: any = undefined;
  private data: string = undefined;
  private path: string = '';

  private favoriteStatusIcon: string = 'star-outline';
  private showHome: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public content: ContentProvider) {
    this.title = navParams.data['content']['title'];
    this.items = navParams.data['content']['items'];
    this.data = navParams.data['content']['dataHTML'];
    this.path = (navParams.data.path || '') + '/' + this.title;

    this.showHome = (navCtrl.length() === 0);

    this.favoriteStatusIcon = (content.isAFavoritePage(this.path)) ? 'star' : 'star-outline';
  }

  /**
   * Descend the CMS tree
   * @param item The tree node to display (a section or leaf/page)
   */
  descend(item) {
    this.navCtrl.push(TreeContentPage, { content: item, path: this.path });
  }

  /**
   * Break out of the Tabs Nav and go back to the Document selector
   */
  navHomePage() {
    let nav = this.navCtrl;

    while (nav.parent)
      nav = nav.parent;

    nav.setRoot(HomePage, {}, { animate: true, direction: 'back' });
  }

  /**
   * Save the Page as a Favorite locally and toggle the icon fill state
   * 
   * @todo Implement `toggleFavoritePage` method on `content`.
   */
  private toggleFavorite() {
    if (this.favoriteStatusIcon === 'star-outline') {
      this.content.addFavoritePage(this.title, this.path);
      this.favoriteStatusIcon = 'star';
    } else {
      this.content.removeFavoritePage(this.title, this.path);
      this.favoriteStatusIcon = 'star-outline';
    }
  }

  logObject() {
    console.log(this.navCtrl);
    this.content.logNavStatus(this.navCtrl);
    console.log('Path: ' + this.path);
  }

}
