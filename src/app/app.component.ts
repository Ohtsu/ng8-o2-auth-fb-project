import { Component, OnInit } from '@angular/core';

// import { Ng8O2AuthFbService } from '../../projects/ng8-o2-auth-fb/src/lib/ng8-o2-auth-fb.service';
import { Ng8O2AuthFbService } from 'ng8-o2-auth-fb';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ng8-o2-auth-firebase-project';
  loginState: any;

  constructor(private authService: Ng8O2AuthFbService) {
  }

  checkWindowAlert() {
    this.authService.checkWindowAlert('Password update email sent');
  }

  ngOnInit() {
    this.authService.setEnvironment(JSON.stringify(environment.o2AuthService));
  }

  isAuthenticated() {
    const ret = this.authService.isAuthenticated();
    return ret;
  }

  loginWithGoogle() {
    this.authService.loginGoogle();
  }

  loginWithFacebook() {
    this.authService.loginFacebook();
  }

  loginWithGithub() {
    this.authService.loginGithub();
  }

  loginWithTwitter() {
    this.authService.loginTwitter();
  }

  getLoginState() {
    const user = this.authService.getLoginState();
    this.authService.myDebug(user);
  }

  logout() {
    this.authService.logout();
    this.authService.myDebug('Logged out');
  }
}