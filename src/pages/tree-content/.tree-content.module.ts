import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreeContentPage } from './tree-content';

@NgModule({
  declarations: [
    TreeContentPage,
  ],
  imports: [
    IonicPageModule.forChild(TreeContentPage),
  ],
})
export class TreeContentPageModule {}
