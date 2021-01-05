// import { firebaseConfig } from  "config/config.js"
// // exporte suas funções

export const CreateUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.trim(), password)
    .then((response) => {
      window.location.pathname = 'feed';
      response('Você está logado parça!');
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert(error.message);
    });
};
