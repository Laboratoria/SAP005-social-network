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
