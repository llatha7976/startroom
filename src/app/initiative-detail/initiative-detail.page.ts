import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IntiativeModalpopupPage} from '../intiative-modalpopup/intiative-modalpopup.page';
import { ModalController } from '@ionic/angular';
import {SubInitiativeModalpopupPage} from '../sub-initiative-modalpopup/sub-initiative-modalpopup.page';

@Component({
  selector: 'app-initiative-detail',
  templateUrl: './initiative-detail.page.html',
  styleUrls: ['./initiative-detail.page.scss'],
})
export class InitiativeDetailPage implements OnInit {

  selectTabs = 'budget1';
  constructor(private route: Router, public modalControler: ModalController ) { }

  ngOnInit() {
  }

  goLogin(){
    this.route.navigate(['initiatives']);
  }
  goBudget(){
    this.route.navigate(['initiative-budget']);
  }
  // popup modal
  async presentModal() {
    const modal = await this.modalControler.create({
      component: SubInitiativeModalpopupPage,
    });
    return await modal.present();
  }
}
