import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugDescriptionPage } from './drug-description';

@NgModule({
  declarations: [
    DrugDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugDescriptionPage),
  ],
})
export class DrugDescriptionPageModule {}
