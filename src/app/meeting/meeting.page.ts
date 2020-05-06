import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MeetingsDetailsPage} from '../meetings-details/meetings-details.page';

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
  goDeatils(){
    this.route.navigate(['meetings-details']);
  }

}
