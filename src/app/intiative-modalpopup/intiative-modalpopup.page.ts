import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from '@angular/router';
// import { CalendarComponentOptions } from 'ion2-calendar';


@Component({
  selector: 'app-intiative-modalpopup',
  templateUrl: './intiative-modalpopup.page.html',
  styleUrls: ['./intiative-modalpopup.page.scss'],
})
export class IntiativeModalpopupPage implements OnInit {
  @Input() data: string;
  @Input() data1: string;
  constructor(public route: Router, public modalControler: ModalController ) { }
  ngOnInit() {
  }
  onChange($event) {
    console.log($event);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalControler.dismiss({
      'dismissed': true
    });
  }
  onEventSelected(){

  }
  onViewTitleChanged(){

  }
  onTimeSelected(){}
}
