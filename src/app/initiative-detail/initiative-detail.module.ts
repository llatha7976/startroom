import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiativeDetailPageRoutingModule } from './initiative-detail-routing.module';

import { InitiativeDetailPage } from './initiative-detail.page';
import {IntiativeModalpopupPage} from '../intiative-modalpopup/intiative-modalpopup.page';
import {SubInitiativeModalpopupPage} from '../sub-initiative-modalpopup/sub-initiative-modalpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiativeDetailPageRoutingModule
  ],
  declarations: [InitiativeDetailPage, SubInitiativeModalpopupPage],
  entryComponents: [ SubInitiativeModalpopupPage ]

})
export class InitiativeDetailPageModule {}

