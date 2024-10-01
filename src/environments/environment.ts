// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebasApi : 'AIzaSyBAILaKh_XJPRJZbp2uvwsPgbYGJnNJPvI',
  urlRegister:'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  urlLogin:'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  DBurl:'https://angular-course-4b8ea-default-rtdb.europe-west1.firebasedatabase.app/people'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
