#!/usr/local/bin/node

var firebase = require('firebase');

// Initialize Firebase
require('../src/assets/authenticate.js');
firebase.initializeApp(firebaseConfig);




let drugs = returnDrugs();

console.log('Starting');

var dbRef = firebase.database().ref('/pharmacopeia');//.child('some-text');

dbRef.set(drugs)
  .then(function () { console.log('Success :3'); process.exit(); })
  .catch(function (error) { console.log('Failure D:' + '\n' + error); process.exit(); });





/*
part
chapter
section
subsection
paragraph
subparagraph
*/




function returnDrugs()
{
  var drugs = {
    title: 'Pharmacopeia',
    items: [
      {
        title: 'Analgesics',
        items: [
          {
            title: 'Acetaminophen/Paracetamol',// (Tylenol)',
            data: `
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
            title: 'Clonidine',
            data: `
              <b>Infants/Children/Adults:</b><br>
              IV: 1-2 micrograms/kg/dose; x1 as a single intraoperative dose<br>
              <br>
              * NOTE: Not indicated in patients in whom minimal or no postoperative pain is expected, such as cleft lip repair with infraorbital block.`
          },
          {
            title: 'Fentanyl',
            data: `
              <b>Infants/Children/Adults:</b><br>
              IV: 0.5-1.0 micrograms/kg/dose; may repeat after 5-10 minutes<br>
              <br>
              * Generally cleft lip patients require no narcotics.
              <br>
              ** Cleft palates typically require <b><span class="uppercase">no more than 2 micrograms/kg total</span> intra-operatively</b>.`
          },
          {
            title: 'Test',
            data: `Example text`
          }
        ]
      },
      {
        title: 'Sedatives/Intravenous Anesthetics',
      },
      {
        title: 'Local Anesthetics',
      },
      {
        title: 'Anticonvulsants',
      },
      {
        title: 'Antiemetics',
      },
      {
        title: 'Antifibrinolytics',
      },
      {
        title: 'Antimicrobials',
      },
      {
        title: 'Antipruritics',
      },
      {
        title: 'Antipyretics',
      },
      {
        title: 'Cardiovascular',
      },
      {
        title: 'Diuretics',
      },
      {
        title: 'Anesthesia Inhalent',
      },
      {
        title: 'Neuromuscular Blockers',
      },
      {
        title: 'Post-exposure Prophylaxis',
      },
      {
        title: 'Respiratory/Asthma',
      },
      {
        title: 'Resuscitation/Patient Code Sheet',
      },
      {
        title: 'Steroids',
      },
      {
        title: 'Topicals',
      },
      {
        title: 'Toxicology/Reversal Agents',
      },
      {
        title: 'Miscellaneous'
      }
    ]
  };

  return r(drugs);
}

function r(node) {
  if (typeof node['items'] !== 'undefined') {
    node.items.forEach(function (e) { r(e); });
  }

  if (typeof node['data'] !== 'undefined') {
    node.data = node.data.replace(/^\s+|\s+$/gm, '').trim();
  }

  if (typeof node['title'] !== 'undefined') {
    node.title = node.title.replace(/^\s+|\s+$/gm, '').trim();
  }

  return node;
}

/*
ANALGESICS
SEDATIVES
  INTRAVENOUS ANESTHETICS
LOCAL ANESTHETICS
ANTICONVULSANTS
ANTIEMETICS
ANTIFIBRINOLYTICS
ANTIMICROBIALS
ANTIPRURITICS
ANTIPYRETICS
CARDIOVASCULAR
DIURETICS
ANESTHESIA INHALENT
NEUROMUSCULAR BLOCKERS
POST-EXPOSURE PROPHYLAXIS
RESPIRATORY/ASTHMA
RESUSCITATION
  PATIENT CODE SHEET
STEROIDS
TOPICALS
TOXICOLOGY
  REVERSAL AGENTS
MISCELLANEOUS
*/
