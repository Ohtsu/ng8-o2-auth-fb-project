
# _Ng8O2AuthFbProject_ Firebase Authentication Library for Angular8
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_Ng8O2AuthFbProject_ is a sample project for making and using Firebase Authentication Library ( _ng8-o2-auth-fb_ ).


_This full source code_,
<https://github.com/Ohtsu/ng8-o2-auth-fb-project>

_Video Explanation (Japanese)_,
<https://youtu.be/>

_Video Explanation (English)_,
<https://youtu.be/>


  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng7/FontAweSomeInAngular7_02.png" width= "640" >

## Overview 
   - _ng8-o2-auth-fb_ is a service library for authentication by Firebase. 

   - _ng8-o2-auth-fb_ is a component that is independent of the user interface. Therefore, you can support both Angular Material and Bootstrap.

   - In addition, you can change the redirect destination page and message by editing the environment variable.

   - Supported certificates are login/password, Google, Twitter, Facebook and GitHub.

   - Registering of users is supported.

   - Reissuing of passwords is also supported.
  

## Prerequisite

   - node.js
   - Typescript3
   - Angular8
   - Angualr Material
   - Firebase
   - Angular/fire


## Installation

To install this project, run simply:

```bash
$ npm install 
```
## Set environment variables


Before starting the server, you need to create an account on Firebase and set that information as an environment variable.

We need to make Firestore database available as well.

Environment variables are set in the environments/environment.ts file.

```bash
export const environment = {
  production: false,
  firebase: {
    apiKey: '-- You need to set this param--',
    authDomain: '-- You need to set this param--',
    databaseURL: '-- You need to set this param--',
    projectId: '-- You need to set this param--',
    storageBucket: '-- You need to set this param--',
    messagingSenderId: '-- You need to set this param--'
  },

  o2AuthService: {
    debugMode: true,
    redirectPath: {
      afterLoginPath: '/',
      signInPath: 'sign-in',
      registerUserPath: 'register-user',
      dashboardPath: 'dashboard',
      forgotPasswordPath: 'forgot-password',
      verifyEmailPath: 'verify-email-address'
    },
    message: {
      sendChangeEmail: 'Sent email',
      logout: 'Logout',
      forgotPasswordEmailSent: 'Password reset email sent, check your inbox',
      resetPasswordEmailSent: 'Password update email sent'
    }
  }
};
```

## Start local server

Start local server as follows.

```bash
$ ng s -o 
```

You will find default dashboard page in your browser.


  - ***First Page*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng7-o2-auth-firebase/ng7-o2-auth-firebase_00.png" width= "640" >



  - ***Login Page*** 

When you click the login button, it is displayed as follows.
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng7-o2-auth-firebase/ng7-o2-auth-firebase_01.png" width= "640" >

  - ***Check Email format*** 

When you enter the email, the incorrect email address will be checked.


  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng7-o2-auth-firebase/ng7-o2-auth-firebase_02.png" width= "640" >

- ***Check Password length*** 

When you click the register button, it is displayed as follows. And password length will be checked.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng7-o2-auth-firebase/ng7-o2-auth-firebase_03.png" width= "640" >

- ***Check Password matching*** 

Matching between password and confirm password will be checked.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng7-o2-auth-firebase/ng7-o2-auth-firebase_04.png" width= "640" >

- ***Debug Mode*** 

Setting debugMode of the environment variable to true makes it possible to obtain information in console as follows.
```
o2AuthService: {
    debugMode: true,
```

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng7-o2-auth-firebase/ng7-o2-auth-firebase_05.png" width= "640" >


## Version

   - ng8-o2-auth-fb-project   : 0.6
   - ng7-o2-auth-fb           : 0.6
   - Angular/cli              : 8.0.0
   - TypeScript               : 3.4.3
   - firebase               : 6.0.0
   - @angular/fire          : 5.1.3
   - @angular/material          : 8.0.0
   - @fortawesome/fontawesome-free  : 5.8.2
   - hammerjs    : 2.0.8
   - node.js : 10.15.3
   

## Reference


- "Angular + Firebase Progressive Web App Starter", 
<https://github.com/codediodeio/angular-firestarter/edit/master/src/app/core/auth.service.ts>

- "Full Angular 7 Firebase Authentication System", 
<https://www.positronx.io/full-angular-7-firebase-authentication-system/?fbclid=IwAR1pXk_hPy_77gigtmpKXlhAPuEY_0MVuX9ssxSJsWUgA71m6w4LQ1XimPI#.XDk-Jxx4HcA.facebook>

- "Angular 7 - Reactive Forms Validation Example", 
<http://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example>

- "Angular Material Form Validation, Input, Datepicker and Modal", 
<https://code-maze.com/angular-material-form-validation/>

- "[Angular エラー対策] Expected validator to return Promise or Observable", 
<https://qiita.com/seteen/items/50999fc33a27bd07e520>


- "Angular 6, Angular 7 Custom Library: Step-by-step guide", 
<https://www.udemy.com/angular5-custom-library-the-definitive-step-by-step-guide/>


- "Angular 6, Angular 7用 カスタムライブラリの作成: 完全ステップ・バイ・ステップ・ガイド", 
<https://www.udemy.com/angular5-l/>

 
## Change Log

 - 2019.5.31 version 0.6 uploaded 

## Copyright

copyright 2019 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](ohtsu@digipub-net.com)

