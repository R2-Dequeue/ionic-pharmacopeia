import { Component } from '@angular/core';
import { /* IonicPage,  */NavController, NavParams } from 'ionic-angular';

import { ContentProvider } from '../../providers/content/content';

//@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  private items = [];
  private searchTerm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private content: ContentProvider) {}

  private onInput(event) {
    this.searchTerm = (event.target.value || '').trim().toLowerCase();

    this.items = [];

    if (this.searchTerm != '') {
      this.searchDocumentTreeLeaves(this.content.documentObject, '');

      this.items.sort((a, b) => {
        if (a.title > b.title)
          return 1;
        else if (a.title < b.title)
          return -1;
        else
          return 0;
      });
    }
  }

  /**
   * Traverse the document tree recursively search for `searchTerm` in each nodes `title`.
   */
  private searchDocumentTreeLeaves(node, path) {
    path += '/' + node.title;

    if (node.items)
      for (let item of node.items)
        this.searchDocumentTreeLeaves(item, path);
    else if (node.data && node.title.toLowerCase().includes(this.searchTerm))
      this.items.push({ title: node.title, path: path });
  }

  private navPage(item) {
    this.content.navPath(item.path, this.navCtrl);
  }

}
