import { Component } from '@angular/core';
import { /* IonicPage,  */NavController, NavParams } from 'ionic-angular';

import { ContentProvider } from '../../providers/content/content';

import { TreeContentPage } from '../tree-content/tree-content';

//@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  private favorites: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private content: ContentProvider) {
    this.favorites = content.getFavoriteNames();
  }

  private navFavorite(index: number) {
    console.log(this.favorites[index].path);
    console.log(this.content.getNodeFromPath(this.favorites[index].path));
    //this.navCtrl.push(TreeContentPage, { content: this.content.getNodeFromPath(this.favorites[index].path) });
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  } */

}
