import { Injectable, OnInit,  NgZone } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class Ng8O2AuthFbService {
  userData: any;
  o2Auth: any;

// ================== config ====================

  public setEnvironment(env: string) {
    this.o2Auth = JSON.parse(env) ;
  }

  public myDebug(...args: any[]): void {
    if (this.o2Auth.debugMode) {
        let str = '';
        if (args.length > 0) {
          str = args.join(', ');
        }
        console.log(str);
    }
}

  constructor(public fireAuth: AngularFireAuth,
              public router: Router,
              public firestore: AngularFirestore,
              public ngZone: NgZone ) {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.setUserData(user);
        this.myDebug('login User JSON ------', JSON.parse(localStorage.getItem('user')));
      } else {
        localStorage.setItem('user', null);
        this.myDebug('login User JSON ------', JSON.parse(localStorage.getItem('user')));
      }
    });

   }

  checkWindowAlert(message: string) {
    window.alert(this.o2Auth.redirectPath.forgotPasswordPath);
    window.alert(this.o2Auth.message.logout);
    window.alert(message);
  }


  ngOnInit() {
  }


  upgradeAnonymousWithGoole() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential =  this.fireAuth.auth.currentUser.linkWithPopup(provider);
  }


// ----------------------------OK -------------------


  forgotPassword(passwordResetEmail) {
    return this.fireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert(this.o2Auth.message.ForgotPasswordComponent);
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }


  isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ;
  }

  getLoginState() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }


  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      providerId: user.providerId,
      isAnonymous: user.isAnonymous
    };
    return userRef.set(userData, {merge: true});
  }

  resetPassword(email: string) {
  const auth = firebase.auth();
  return auth
    .sendPasswordResetEmail(email)
    .then(() => {
      window.alert(this.o2Auth.message.resetPassword);
    })
    .catch(error => {
      window.alert(error.message);
    });
  }

  loginEmail(email: string, password: string) {
    this.fireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.ngZone.run(() => {
          this.router.navigate([this.o2Auth.redirectPath.dashboardPath]);
        });
        return this.setUserData(credential.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
    }

  reloadCurrentUser() {
    this.fireAuth.auth.currentUser.reload();
  }

  sendVerificationMail() {
    return this.fireAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate([this.o2Auth.redirectPath.verifyEmailPath]);
    });
  }

  signUp(email, password) {
    return this.fireAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.sendVerificationMail();
      return this.setUserData(result.user);
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }

  loginAnonymously() {
    return  this.fireAuth.auth
      .signInAnonymously()
      .then( credential => {
        return this.setUserData(credential.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.loginByAuthProvider(provider);
  }


  loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.loginByAuthProvider(provider);
  }

  loginGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.loginByAuthProvider(provider);
  }

  loginTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.loginByAuthProvider(provider);
  }

  logout() {
    return this.fireAuth.auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate([this.o2Auth.signInPath]);
    });
  }

  loginByAuthProvider(provider: any ) {
    return this.fireAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.myDebug(result);
      this.ngZone.run(() => {
        this.router.navigate([this.o2Auth.redirectPath.dashboardPath]);
      });
      return this.setUserData(result.user);
    })
    .catch((error) => {
      this.myDebug(error);
      window.alert(error.message);
    });
  }

}
