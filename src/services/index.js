

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
  .then((result) => {
    const token = result.user.uid;
    const user = result.user;
    console.log(user, token, "usuário Logado com sucesso")
    return (token, user);
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("deu ruim", errorMessage, errorCode)
    if (errorCode === "auth/wrong-password" || errorCode === 'auth/invalid-email') {
      return alert('Email ou Senha incorreta!');
    } 
    return `Codigo de error: ${errorCode}`;
  });
};

export const gmailLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
   .then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
    console.log(user, "Usuário Logado com o google com sucesso",token )
    return (user,token)
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
    console.log("Usuário não foi logado", errorCode, errorMessage, email, credential )
  });
  
};

export const userLogout = () => {
  firebase
  .auth()
  .signOut()
  .then(function() {
    console.log("usuário deslogado com sucesso")
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("deu ruim, usuário continua logado", errorMessage, errorCode)
  });
  };

