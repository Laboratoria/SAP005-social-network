import { loginTags } from './standard.js';
// import { validation , persist } from '../../services/index.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  const pageStructure = loginTags();
  rootElement.innerHTML = pageStructure;

  const email = rootElement.querySelector('#email-login');
  const password = rootElement.querySelector('#password-login');
  const loginButton = rootElement.querySelector('#lgn-btn');
  const signUpButton = rootElement.querySelector('#sgnUp-btn');

  const clear = () => {
    email.value = '';
    password.value = '';
  };

  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .catch((error) => {
        var errorMessage = error.message;
        if (errorMessage == 'The email address is badly formatted.') {
          alert('Email incorreto');
        } else {
          alert('Senha incorreta');
        }
      });
    clear();
  });

  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    rootElement.innerHTML = '';
  });

  

  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  return rootElement;
};
