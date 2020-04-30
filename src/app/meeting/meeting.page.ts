import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.page.html',
  styleUrls: ['./meeting.page.scss'],
})
export class MeetingPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  goLogin() {
    this.route.navigate(['login']);
  }

}
