import { Component, OnInit } from '@angular/core';

// import { Ng8O2AuthFbService } from '../../../../projects/ng8-o2-auth-fb/src/lib/ng8-o2-auth-fb.service';

import { Ng8O2AuthFbService } from 'ng8-o2-auth-fb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: Ng8O2AuthFbService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    const ret = this.authService.isAuthenticated();
    this.authService.myDebug('isAuthenticated-----', ret);
    return ret;
  }

}
