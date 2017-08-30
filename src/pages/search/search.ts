import { Component } from '@angular/core';
import { /* IonicPage,  */NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onInput(event) {
    let val = event.target.value;

    if (val)
      val = val.trim();

    if (val != '')
      this.items.push(val);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
