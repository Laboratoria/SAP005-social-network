// const email = 'teste1@teste.com';
// const password = 'teste1234';

// firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then(() => console.log('deu certo'))
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log('deu ruim');
//   });

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
