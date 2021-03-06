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
  private debugComponent: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private content: ContentProvider) {}

  private navFavorite(path: string) {
    let temp = path.replace(/\/[^\/]+$/, '');
    this.navCtrl.push(TreeContentPage, { content: this.content.getNodeFromPath(path), path: temp });
  }

  public logFavorites(): void {
    console.log(this.content.favorites);
    console.log(this.content.favArray);
  }

}
