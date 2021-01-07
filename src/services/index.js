import { onNavigate } from '../utils/history.js';
import { errors } from './errors.js';

export const validation = (person) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(person.email, person.password)
    .then(onNavigate('/home'))
    .catch((error) => {
      var errorMessage = error.message;
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
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
};


export const createUser = (person) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(person.email, person.password)
    .then(
      console.log(person.name),
      () => firebase.auth().currentUser.updateProfile({ displayName: person.name }),
      () => firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set(person),
    )
    
    .catch((error) => errors(error));
};


export const logOut = () => {
  firebase
   .auth()
   .signOut()
   .then(onNavigate('/'));
}