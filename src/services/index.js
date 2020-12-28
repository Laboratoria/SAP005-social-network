// import { firebaseConfig } from  "config/config.js"
// // exporte suas funções

export const CreateUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      window.location = '#singup';
      response('Você está logado parça!');
    })
    .cath((error) => {
      error.alert('Reveja sua senha parça!');
    });
};
