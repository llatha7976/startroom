import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiativeDetailPageRoutingModule } from './initiative-detail-routing.module';

import { InitiativeDetailPage } from './initiative-detail.page';
// import {IntiativeModalpopupPage} from '../intiative-modalpopup/intiative-modalpopup.page';
import {SubInitiativeModalpopupPage} from '../sub-initiative-modalpopup/sub-initiative-modalpopup.page';
import {ActivitiesModalpopupPage} from '../activities-modalpopup/activities-modalpopup.page';
import {MilestoneModalpopupPage} from '../milestone-modalpopup/milestone-modalpopup.page';
import{ InitModelpopupPage} from '../init-modelpopup/init-modelpopup.page';

// import {IntiativeModalpopupPage} from '../intiative-modalpopup/intiative-modalpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiativeDetailPageRoutingModule
  ],
  declarations: [InitiativeDetailPage, SubInitiativeModalpopupPage, ActivitiesModalpopupPage, MilestoneModalpopupPage,InitModelpopupPage],
  entryComponents: [ SubInitiativeModalpopupPage, ActivitiesModalpopupPage, MilestoneModalpopupPage,InitModelpopupPage ]

})
export class InitiativeDetailPageModule {}

