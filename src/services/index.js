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

/* export const SingOut = () => firebase
  .auth()
  .signOut()
  .then(() => {
    window.location.pathname = 'home';
  }); */

export const SingInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      const credential = firebase.auth().currentUser;
      window.location.pathname = 'feed';

      return credential;
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert(error.message);
    });
};

export const IsCurrentUser = (notLoggedPage) => firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    window.location.pathname = 'feed';
    // ...
  } else {
    window.location.pathname = notLoggedPage;
  }
});
