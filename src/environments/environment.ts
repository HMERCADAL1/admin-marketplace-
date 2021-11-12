// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
   production: false,
  urlFirebase: 'https://marketplace-ca50e-default-rtdb.firebaseio.com/',
  urlLogin: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWwUC5dFggfB1MtgQYOESpWAw00NQxObM',
  urlGetUser: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBWwUC5dFggfB1MtgQYOESpWAw00NQxObM',
  urlFiles: 'http://localhost/sistemas-angular/marketplace/src/assets/img/',
  adminFiles: 'http://localhost/sistemas-angular/marketplace/src/assets/img/index.php?key=AIzaSyBWwUC5dFggfB1MtgQYOESpWAw00NQxObM',
  deleteFiles:'http://localhost/sistemas-angular/marketplace/src/assets/img/delete.php?key=AIzaSyBWwUC5dFggfB1MtgQYOESpWAw00NQxObM',
  urlRefreshToken: 'https://securetoken.googleapis.com/v1/token?key=AIzaSyBWwUC5dFggfB1MtgQYOESpWAw00NQxObM',
  urlEmail:'http://localhost/sistemas-angular/admin-angular/src/assets/email/index.php?key=AIzaSyBWwUC5dFggfB1MtgQYOESpWAw00NQxObM',
  domainMP:'http://localhost:4201/',
  nameStore:'Digitalworld Us'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
