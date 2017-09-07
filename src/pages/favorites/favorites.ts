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

  constructor(public navCtrl: NavController, public navParams: NavParams, private content: ContentProvider) {}

  private navFavorite(index: number) {
    this.navCtrl.push(TreeContentPage, {
      content: this.content.getNodeFromPath(this.content.favorites[index].path)
    });
  }

  public logFavorites(): void {
    console.log(this.content.favorites);
  }

}
