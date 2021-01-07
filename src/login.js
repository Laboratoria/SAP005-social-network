
let ui = new firebaseui.auth.AuthUI(firebase.auth());

  ui.start('#firebaseui-auth-container',{
    callbacks: {
        signInSuccessWithAuthResult(authResult){
            return false
        }
    },
    signInOptions: [
       firebase.auth.EmailAuthProvider.PROVIDER_ID, 
       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
    ,
    signInFlow: 'popup'  
  });
  


 
