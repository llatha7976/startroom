import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intiative-modalpopup',
  templateUrl: './intiative-modalpopup.page.html',
  styleUrls: ['./intiative-modalpopup.page.scss'],
})
export class IntiativeModalpopupPage implements OnInit {
  @Input() data: string;
  @Input() data1: string;
  public buttonTrue: boolean;

  constructor( private modalControler: ModalController, public router: Router)  {
    // console.log(data,'lathaa')

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
