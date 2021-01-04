// ARQUIVO PARA FUNÇÕES CRUD (CREATE, READ, UPDATE & DELETE) RELACIONADAS AO FIREBASE
import { redirectToPage } from '../router.js';

const logoutButton = document.querySelector('#logout-btn');
const auth = firebase.auth();
// const firestore = firebase.firestore();

const verifyLogin = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      logoutButton.classList.remove('hidden');
      redirectToPage('/feed');
    } else {
      logoutButton.classList.add('hidden');
      redirectToPage('/');
    }
  });
};

export const googleLogin = (event) => {
  event.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(() => {
      verifyLogin();
    })
    .catch();
};

logoutButton.addEventListener('click', () => {
  auth.signOut();
  verifyLogin();
});

export const emailAndPasswordLogin = (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('usuário', user);
      alert('usuário logado!');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        alert('Email address is not valid');
      } else if (errorCode === 'auth/user-disabled.') {
        alert ('User corresponding to the given email has been disabled.');
      } else if (errorCode === 'auth/user-not-found') {
        alert ('There is no user corresponding to the given email.');
      } else if (errorCode === 'auth/wrong-password') {
        alert ('Password is invalid for the given email, or the account corresponding to the email does not have a password set.');
      } else {
        alert('Something went wrong. Please try again');
      }
    });
};

export const createRegister = (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password != confirmPassword) {
    alert('A senha digitada está diferente em um dos campos');
    return false;
  }
  firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(user => {
      console.log('usuário', user);
      alert('usuário criado');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('E-mail já cadastrado');
      }
      if (error.code === 'auth/invalid-email') {
        alert('E-mail inválido');
      }
    })
};
