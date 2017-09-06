import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { firebaseConfig } from '../../assets/authenticate';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class ContentProvider {

  public favorites: { name: string, path: string }[] = [
    {
      name: 'Clonidine',
      path: '/Analgesics/Clonidine'
    },
    {
      name: 'Lorazepam',
      path: '/Sedatives/Lorazepam'
    }
  ];

  public documentObject: any = {};
  
  constructor(private storage: Storage) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let ref = firebase.database().ref('/documents/pharmacopeia');

    ref.once('value', snapshot => this.documentObject = snapshot.val());

    // Initialize Favorites
    storage.ready().then(() => {
      storage.get('favorites').then((val) => {
        console.log('`storage.get`: ');
        console.log(val);

        if (val) {
          let parsed = JSON.parse(val);

          if (parsed)
            this.favorites = parsed;
        }
      });
    });
  }

  public addFavoritePage(name: string, path: string) {
    this.favorites.push({ name: name, path: path });
    this.favorites.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      else if (b.name > a.name)
        return 1;
      else
        return 0;
    });

    this.storage.set('favorites', JSON.stringify(this.favorites));
  }

  public removeFavoritePage(name: string, path: string) {}

  /**
   * Returns the object representing a node in the CMS document tree
   * @param path URL-like path that identifies a node in the CMS document tree
   */
    public getNodeFromPath(path: string): any {
    let pages: string[] = path.split('/').filter((o) => { return o != ''; });
    let d = this.documentObject;

    while (pages.length > 0) {
      let nodeTitle: string = pages.shift();

      for (let n of d.items)
        if (n.title == nodeTitle) {
          d = n;
          break;
        }
    }

    return d;
  }

  public logNavStatus(nav: NavController) {
    let navStatus = {
      length: nav.length(),
      type: nav.getType(),
      views: nav.getViews()
    };
    console.log(navStatus);
  }

}
