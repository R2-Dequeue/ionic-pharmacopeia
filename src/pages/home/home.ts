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




          Oral/Rectal Dosing
          Infants/Children:
          PO: 10-15 mg/kg/dose; every 4-6 hours prn
          PR: 25-40 mg/kg/dose; every 8 hours prn
          MAX: 90 mg/kg/day
          
          Children >12 years/Adults:
          If > 50 kg, otherwise use per kg doing above)
          PO: 650-1000 mg/dose; every 4-6 hours prn
          PR: 1300 mg/dose; every 4-6 hours prn
          MAX: 4 grams/day`
      },
      {
        name: 'Clonidine (Catapres)',
        description: `
          Infants/Children/Adults:
          IV: 1-2 micrograms/kg/dose; x1 as a single intraoperative dose
          
          * NOTE: Not indicated in patient in whom minimal or no postoperative pain is expected, such as cleft lip repair with infraorbital block.`
      },
      {
        name: 'Fentanyl (Sublimaze)',
        description: `
          Infants/Children/Adults:
          IV: 0.5-1.0 micrograms/kg/dose; may repeat after 5-10 minutes
          
          * Generally cleft lip patients require no narcotics.
          
          ** Cleft palates typically require NO MORE THAN 2 MICROGRAMS/KG TOTAL intra-operatively.`
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
