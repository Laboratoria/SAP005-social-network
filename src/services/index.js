// import { firebaseConfig } from  "config/config.js"
// // exporte suas funções
const email = '';
const password = '';

export const CreateUser = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      window.location = '#feed';
      response('Você está logado parça!');
    })
    .cath((error) => {
      error.alert('Reveja sua senha parça!');
    });
};
