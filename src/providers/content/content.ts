import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

import { firebaseConfig } from '../../assets/authenticate';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class ContentProvider {

  private favorites: any = [
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
  
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.database().ref().
    // firebase.database().r
    // this.pharmObject = db.object('/documents/pharmacopeia');
    // this.pharmObject.$ref.on('value', snapshot => this.data = snapshot.val());
  }

  public getFavoriteNames(): any {
    return this.favorites;
    /* let r = [];

    for (let fav of this.favorites)
      r.push(fav.match(/[^\/]+$/g)[0]);

    return r; */
  }

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
