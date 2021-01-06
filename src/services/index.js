// import { firebaseConfig } from  "config/config.js"
// // exporte suas funções

export const CreateUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.trim(), password)
    .then(() => {
      window.location.pathname = 'feed';
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert(error.message);
    });
};

export const SingIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.trim(), password)
    .then(() => {
      window.location.pathname = 'feed';
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert(error.message);
    });
};
