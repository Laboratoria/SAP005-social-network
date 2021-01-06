import { onNavigate } from '../utils/history.js';
import { errors } from './errors.js';

export const validation = (person) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(person.email, person.password)
    .then((user) => {
      console.log('usuario', user);
    })
    .catch('lascou');
};

export const persist = (person) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => firebase.auth().signInWithEmailAndPassword(person.email, person.passwor))
    .catch('setar erro');
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
    .then(onNavigate('/'))
    .catch((error) => errors(error));
};
