googleSignIn=()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log(result);
    alert("Login efetuado com sucesso");
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(error);
    alert("404-Algo deu errado. Verifique sua solicitação");
  })
}


