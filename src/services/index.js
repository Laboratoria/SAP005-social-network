// Deslogar o usuario
export const logOut = () => {
  if (firebase.auth().currentUser !== null) {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#home';
      })
      .catch(() => {
        alert('Falha ao desconectar, por gentileza, tente novamente');
      });
  }
};

//   UID
export const userId = () => {
  const idUser = firebase.auth().currentUser.uid;
  const id = idUser.id;
  return id;
};

// Enviar um e-mail de verificação a um usuário
export const confirmEmail = () => {
  firebase
    .auth()
    .currentUser
    .sendEmailVerification();
};
