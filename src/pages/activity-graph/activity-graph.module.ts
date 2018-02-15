import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityGraphPage } from './activity-graph';

@NgModule({
  declarations: [
    ActivityGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityGraphPage),
  ],
})
export class ActivityGraphPageModule {}
