import { onNavigate } from '../utils/history.js';

const auth = firebase.auth();
const firestore = firebase.firestore();
const usersCollection = firestore.collection('users');

export const googleLogin = (event) => {
  event.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert('usuário logado');

      usersCollection.doc(`${user.email}`)
        .set({
          name: user.displayName,
          id: user.uid,
          photo: user.photoURL,
        }, { merge: true });
      onNavigate('/feed');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Essa conta já existe com uma credencial diferente');
      }
    });
};

export const signOut = () => {
  auth.signOut();
};

export const emailAndPasswordLogin = (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('usuário', user);
      onNavigate('/feed');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        alert('Endereço de email inválido');
      } else if (errorCode === 'auth/wrong-password') {
        alert('A senha é inválida');
      } else {
        alert('Algo deu errado. Por favor, tente novamente mais tarde.');
      }
    });
};

export const createAccount = (event) => {
  event.preventDefault();
  const email = document.querySelector('#sign-up-email').value;
  const password = document.querySelector('#sign-up-password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;
  if (password !== confirmPassword) {
    return false;
  }
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('usuário', user);
      onNavigate('/feed');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        alert('E-mail já cadastrado');
      } else if (errorCode === 'auth/weak-password') {
        alert('Senha fraca');
      }
    });
};
