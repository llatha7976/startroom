import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-sub-initiative-modalpopup',
  templateUrl: './sub-initiative-modalpopup.page.html',
  styleUrls: ['./sub-initiative-modalpopup.page.scss'],
})
export class SubInitiativeModalpopupPage implements OnInit {
  @Input() data: string;
  @Input() data1: string;
  @Input() activityeditdata: string;
  @Input() milestonedata: string;
  @Input() activitydata: string;

  constructor(public modalControler: ModalController) {
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalControler.dismiss({
      'dismissed': true
    });
  }

}

