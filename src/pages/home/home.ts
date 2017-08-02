import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DrugDescriptionPage } from '../drug-description/drug-description';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  drugs: any = [];

  constructor(public navCtrl: NavController) {
    this.drugs = [
      {
        name: 'Acetaminophen/Paracetamol',// (Tylenol)',
        description: `
          <b class="uppercase">Oral/Rectal Dosing</b><br>
          <b>Infants/Children:</b><br>
          PO: 10-15 mg/kg/dose; every 4-6 hours prn<br>
          PR: 25-40 mg/kg/dose; every 8 hours prn<br>
          <b>MAX: 90 mg/kg/day</b><br>
          <br>
          <b>Children >12 years/Adults:</b><br>
          If > 50 kg, otherwise use per kg doing above)<br>
          PO: 650-1000 mg/dose; every 4-6 hours prn<br>
          PR: 1300 mg/dose; every 4-6 hours prn<br>
          <b>MAX: 4 grams/day</b><br>
          <br>
          <b class="uppercase">Intravenous Dosing</b>:<br>
          <b>Term Neonates/Children up to 1 year</b>:<br>
          IV: 7.5 mg/kg/dose; infuse over 15 minutes; every 6 hours<br>
          <b>MAX: 30 mg/kg/day</b><br>
          <br>
          <b>Children >1 year/Adults</b>:<br>
          IV: 10-15 mg/kg/dose; infuse over 15 minutes; every 4-6 hours<br>
          <b>MAX: 75 mg/kg/day</b>`
      },
      {
        name: 'Clonidine (Catapres)',
        description: `
          <b>Infants/Children/Adults:</b><br>
          IV: 1-2 micrograms/kg/dose; x1 as a single intraoperative dose<br>
          <br>
          * NOTE: Not indicated in patients in whom minimal or no postoperative pain is expected, such as cleft lip repair with infraorbital block.`
      },
      {
        name: 'Fentanyl (Sublimaze)',
        description: `
          <b>Infants/Children/Adults:</b><br>
          IV: 0.5-1.0 micrograms/kg/dose; may repeat after 5-10 minutes<br>
          <br>
          * Generally cleft lip patients require no narcotics.
          <br>
          ** Cleft palates typically require <b><span class="uppercase">no more than 2 micrograms/kg total</span> intra-operatively</b>.`
      },
      {
        name: 'Test',
        description: 'Example text'
      }
    ];

    for (let d of this.drugs)
      d.description = d.description.trim();
  }

  openDescription(drug) {
    this.navCtrl.push(DrugDescriptionPage, { drug: drug });
  }
}
