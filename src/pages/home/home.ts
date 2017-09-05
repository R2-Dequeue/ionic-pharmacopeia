import { Component } from '@angular/core';
import { /* IonicPage,  */NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { SettingsPage } from '../settings/settings';
import { TabsPage } from '../tabs/tabs';

import { ContentProvider } from '../../providers/content/content';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pharmObject: FirebaseObjectObservable<any>;
  data = {};

  private documents: any = [
    {
      title:  'Pharmacopeia',
      id:     'pharmacopeia',
      image:  'assets/img/Surgery.jpg'
    },
    {
      title:  'Resource Manual',
      id:     'resource_manual',
      image:  'assets/img/VolunteerAndPatient.jpg'
    }
  ];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public content: ContentProvider) {
    this.pharmObject = db.object('/documents/pharmacopeia');
    this.pharmObject.$ref.on('value', snapshot => this.data = snapshot.val());
  }

  navContent(id) {
    if (id === 'pharmacopeia')
      this.navCtrl.push(TabsPage, { content: this.data });
  }

  navSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }
}
