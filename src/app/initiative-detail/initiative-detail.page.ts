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
  async presentModal(value) {
    // alert('3')

    const modal = await this.modalControler.create({
      component: SubInitiativeModalpopupPage,
      componentProps: {
        data: 'plus',
      }
    });
    return await modal.present();
  }
  async editModal(value) {
    const modal = await this.modalControler.create({
      component: SubInitiativeModalpopupPage,
      componentProps: {
        data1: 'edit',
      }
    });
    return await modal.present();
  }
  async activityeditModal(value) {
    const modal = await this.modalControler.create({
      component: SubInitiativeModalpopupPage,
      componentProps: {
        activityeditdata: 'edit',
      }
    });
    return await modal.present();
  }
  async milestoneModal(value) {
    // alert('1')
    const modal = await this.modalControler.create({
      component: SubInitiativeModalpopupPage,
      componentProps: {
        milestonedata: 'plusmiles',
      }
    });
    return await modal.present();
  }async activityModal(value) {
    // alert('2')

    const modal = await this.modalControler.create({
      component: SubInitiativeModalpopupPage,
      componentProps: {
        activitydata: 'plusactivity',
      }
    });
    return await modal.present();
  }
}

