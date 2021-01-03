export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user, token);
    })
    .catch();
};

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
  })
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
