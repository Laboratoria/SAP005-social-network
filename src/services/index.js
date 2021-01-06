// exporte suas funções

import { onNavigate } from "../utils/history.js";

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
    .then(function () {
      firebase.auth().currentUser.updateProfile({
        displayName: person.name,
      });
      firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(person);
    })
    .then(function() {
      alert("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
};

export const logOut = () => {
  firebase
   .auth()
   .signOut()
   .then(onNavigate('/'));
}