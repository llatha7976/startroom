import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubInitiativeModalpopupPageRoutingModule } from './sub-initiative-modalpopup-routing.module';

import { SubInitiativeModalpopupPage } from './sub-initiative-modalpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubInitiativeModalpopupPageRoutingModule
  ],
  declarations: [SubInitiativeModalpopupPage]
})
export class SubInitiativeModalpopupPageModule {}
