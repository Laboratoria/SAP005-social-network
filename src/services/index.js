export const createUser = (email,password, name,lastName) => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .then((user) => {
    console.log(user, "usuário criado")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim", errorMessage,errorCode)
  });
};

export const userLogin = (email, password) => {
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user, "usuário Logado com sucesso")
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("deu ruim", errorMessage, errorCode)
  });
};

export const gmailLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
    console.log(user, "usuário logado com o google com sucesso",token )
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
    console.log("deu ruim", errorCode, errorMessage, email, credential )
  });
  
};

export const userLogout = () => {
  firebase
  .auth()
  .signOut()
  .then(function() {
    console.log("usuário Deslogado com sucesso")
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("deu ruim", errorMessage, errorCode)
  });
  };


  
