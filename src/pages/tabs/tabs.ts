import { Component } from '@angular/core';
import { /* IonicPage,  */NavController, NavParams } from 'ionic-angular';

//import { HomePage } from '../home/home';
import { TreeContentPage } from '../tree-content/tree-content';
import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';

//@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  treeRoot = TreeContentPage;
  searchRoot = SearchPage;
  favoritesRoot = FavoritesPage;

  contentData = { path: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contentData = navParams.data;
    this.contentData['path'] = '';
  }

}
