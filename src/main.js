
var firebaseConfig = {
  apiKey: "AIzaSyB9qenNuKsIhxK43eC3C6FOGrd4u4Wymso",
  authDomain: "rede-social-1adf7.firebaseapp.com",
  projectId: "rede-social-1adf7",
  storageBucket: "rede-social-1adf7.appspot.com",
  messagingSenderId: "115684602823",
  appId: "1:115684602823:web:2ecc467d5a12175559dfe2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


googleSignin=()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log(result);
    console.log("Sucesso! ta linkado");
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(error);
    console.log("houve um equivoco");
  })
}


