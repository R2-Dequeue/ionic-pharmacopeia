import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  drugs: any = []

  constructor(public navCtrl: NavController) {
    this.drugs = [
      {
        'name': 'Acetaminophen/Paracetamol (Tylenol)',
        'description': `
          Oral/Rectal Dosing<br>
          <br> Infants/Children:
          <br> PO: 10-15 mg/kg/dose; every 4-6 hours prn<br> PR: 25-40 mg/kg/dose; every 8 hours prn<br> MAX: 90 mg/kg/day<br>
          <br> Children >12 years/Adults:<br> If > 50 kg, otherwise use per kg doing above)<br> PO: 650-1000 mg/dose; every
          4-6 hours prn<br> PR: 1300 mg/dose; every 4-6 hours prn<br> MAX: 4 grams/day<br>`
      },
      {
        'name': 'Clonidine (Catapres)',
        'description': `
          Infants/Children/Adults:<br>
          IV: 1-2 micrograms/kg/dose; x1 as a single intraoperative dose<br>
          <br>
          * NOTE: Not indicated in patient in whom minimal or no postoperative pain is expected, such
          as cleft lip repair with infraorbital block.`
      }
    ];

    openDescription(drug) {
      this.navCtrl.push(someClass, { drug: drug });
    }
  }
}
