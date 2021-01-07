import { onNavigate } from '../utils/history.js';
import { errors } from './errors.js';

export const validation = (person) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(person.email, person.password)
    .then(() => {
      if (firebase.auth().currentUser == null) {
        onNavigate('/');
      } else {
        onNavigate('/home');
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      if (errorMessage == 'The email address is badly formatted.') {
        alert('Email incorreto');
      } else {
        alert('Senha incorreta');
      }
    });
};

export const persist = () => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION);
};

export const createUser = (person) => {
  firebase.auth().createUserWithEmailAndPassword(person.email, person.password)
    .then(
      () => { firebase.auth().currentUser.updateProfile({ displayName: person.userName }); },
    )
    .then(
      () => { firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(person); },
    )
    .then(onNavigate('/home'))
    .catch((error) => errors(error));
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(onNavigate('/'));
};
