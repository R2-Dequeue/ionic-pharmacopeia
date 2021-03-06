import { Component } from '@angular/core';
import { /* IonicPage,  */NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { TabsPage } from '../tabs/tabs';

import { ContentProvider } from '../../providers/content/content';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  constructor(public navCtrl: NavController, public content: ContentProvider) {}

  navContent(id) {
    // Talk to ContentProvider to pull data
    
    if (id === 'pharmacopeia')
      this.navCtrl.push(TabsPage, { content: this.content.documentObject });
  }

  navSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }
}
