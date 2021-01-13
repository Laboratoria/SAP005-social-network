/* eslint-disable object-shorthand */
import { onNavigate } from '../../utils/history.js';

export const registerLogin = (email, password, name, location) => {
  if (email === '' || password === '' || name === '' || location === '') {
    alert('Preencha os campos em branco');
  } else {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => firebase.auth().currentUser.updateProfile({ displayName: name }))
      .then(() => {
        window.location.hash = onNavigate('/generalFeed');
        const uid = firebase.auth().currentUser.uid;
        const user = {
          emailUser: email,
          user_uid: firebase.auth().currentUser.uid,
          name: name,
        };
        firebase.firestore().collection('users').doc(uid).set(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
