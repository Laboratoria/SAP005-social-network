// import { Login } from './index.js';
// export default () => {};

// var googleProvider = new firebase.auth.GoogleAuthProvider();
// var facebookProvider = new firebase.auth.FacebookAuthProvider();
// var credential = firebase.auth.EmailAuthProvider.credential(e-mail, password);
// var ui = new firebaseui.auth.AuthUI(firebase.auth());




 
// provider.addScope('email');
// provider.addScope('user_friends');

// firebase.auth().createUserWithEmailAndPassword(e-mail, password)
//       .then(()=> console("deu certo")) 
//           alert("Cadastrado com sucesso")   
//       .catch(function (error){
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//       });   

// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });

//   var provider = new firebase.auth.GoogleAuthProvider();
//   ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       {
//         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
//       }
//     ],
//   });
   
//          firebase.auth().signInWithRedirect(provider);

//          firebase.auth().getRedirectResult().then(function(result) {
//                     if (result.credential) {
//                     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//                     var token = result.credential.accessToken;
//                     // ...
//                     }
//                     var user = result.user;
//                 }).catch(function(error) {
//                     var errorCode = error.code;
//                     var errorMessage = error.message;
//                     var email = error.email;
//                     var credential = error.credential;
//                     // ...
//                 });

//           auth.signInWithRedirect(provider)
//           auth.getRedirectResult().then(function(result) {           
//             var user = result.user;
//             var credential = result.credential;
//             var operationType = result.operationType;
//           }, function(error) { 
//             var email = error.email;
//             var credential = error.credential;
//             if (error.code === 'auth/account-exists-with-different-credential') {
//               auth.fetchSignInMethodsForEmail(email).then(function(providers) {
//               });
//             }
//           });


//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       var uid = user.uid;
//     } 
//   });

//   auth.currentUser.linkWithCredential(credential)
//     .then(function(usercred) {
//         var user = usercred.user;
//         console.log("Account linking success", user);
//     }).catch(function(error) {
//         console.log("Account linking error", error);
//     });
    
//   firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//   });
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });

// //google
// gapi.auth2.init()
// GoogleAuth.signIn () {
//  SigninOptionsBuilder ();
//  opções . setAppPackageName ( 'com.example.app' );
//   opções . setFetchBasicProfile ( True ); 
//   opções . 
//   setPrompt ( 'select_account' )
//   . setScope ( 'perfil' )
//   . setScope ( 'email' ); 
// }



// GoogleAuth.isSignedIn.get ()
// BasicProfile.getEmail ()
// getBasicProfile()

//     function onSignIn (googleUser) {
//       var profile = googleUser.getBasicProfile();
//       console.log('ID: ' + profile.getId()); 
//       console.log('Name: ' + profile.getName());
//       console.log('Image URL: ' + profile.getImageUrl());
//       console.log('Email: ' + profile.getEmail()); 
//     }

