import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { DrugDescriptionPage } from '../drug-description/drug-description';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  drugs: any = [];
  pharmData: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController) {
    this.pharmData = db.list('/pharmacopeia/chapters/0/sections');
  }

  openDescription(drug) {
    this.navCtrl.push(DrugDescriptionPage, { drug: drug });
  }
}
