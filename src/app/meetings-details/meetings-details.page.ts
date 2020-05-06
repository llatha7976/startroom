import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings-details',
  templateUrl: './meetings-details.page.html',
  styleUrls: ['./meetings-details.page.scss'],
})
export class MeetingsDetailsPage implements OnInit {
  selectTabs= 'budget1';
  constructor() { }

  ngOnInit() {
  }

}
