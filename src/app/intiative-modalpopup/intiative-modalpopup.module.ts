import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IntiativeModalpopupPage } from './intiative-modalpopup.page';


import { IntiativeModalpopupPageRoutingModule } from './intiative-modalpopup-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntiativeModalpopupPageRoutingModule
  ],
  declarations: [IntiativeModalpopupPage]
})
export class IntiativeModalpopupPageModule {}
