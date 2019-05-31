// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA2BDn-3GOGO3Py3M9NDvAGOpByxYca3bc',
    authDomain: 'test-78415.firebaseapp.com',
    databaseURL: 'https://test-78415.firebaseio.com',
    projectId: 'test-78415',
    storageBucket: 'test-78415.appspot.com',
    messagingSenderId: '910702016384'
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
  },

  test: {
    redirectPath: {
      afterLoginPath: '/',
      signInPath: 'sign-in',
      registerUserPath: 'register',
      dashboardPath: 'dashboard',
      forgotPasswordPath: 'forgot-password',
      verifyEmailPath: 'verify-email-address'
    },
    message: {
      sendChangeEmail: 'Sent email',
      logout: 'Logout'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
