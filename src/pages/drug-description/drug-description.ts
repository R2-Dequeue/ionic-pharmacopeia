import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrugDescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-drug-description',
  templateUrl: 'drug-description.html',
})
export class DrugDescriptionPage {
  drug;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drug = navParams.data.drug;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugDescriptionPage');
  }

}
