import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusInfoPage } from './status-info';

@NgModule({
  declarations: [
    StatusInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(StatusInfoPage),
  ],
})
export class StatusInfoPageModule {}
