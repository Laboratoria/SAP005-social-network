// Identificar o usuário conectado
export const identifyUser = () => {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
};

// Também é possível receber o usuário
//  conectado usando a propriedade currentUser.
// const name, email, photoUrl, uid, emailVerified;
// // Se um usuário não estiver conectado, currentUser será nulo
// if (user != null) {
//   name = user.displayName;
//   // email = user.email;
//   // photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
// // uid = user.uid;  // Usar -> User.getToken()
// // User is signed in.
// } else {
//   // No user is signed in.
// }

//   Criar usuario
// export const createUser = (email, password) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password);
// };

//   UID
export const userId = () => {
  const idUser = firebase.auth().currentUser;
  const id = idUser.id;
  return id;
};

// Perfil
export const createProfile = () => {
  firebase
    .firestore()
    .collection('users').doc(userId()).set({
      email: firebase
        .auth()
        .currentUser
        .email,
    });
};

// Enviar um e-mail de verificação a um usuário
export const confirmEmail = () => {
  firebase
    .auth()
    .currentUser
    .sendEmailVerification();
};

// Atualizar o perfil de um usuário
// atualizar as informações básicas do perfil de um usuário,
// como o nome de exibição e o URL da foto do perfil dele,
// com o método updateProfile
// user.updateProfile({
//   displayName: 'Jane Q. User',
//   photoURL: 'https://example.com/jane-q-user/profile.jpg',
// }).then(() => {
//   // Update successful.
// }).catch((error) => {
//   // An error happened.
// });

// Enviar um e-mail de verificação a um usuário com o método sendEmailVerification
// user.sendEmailVerification().then(() => {
//   // Email sent.
// }).catch((error) => {
//   // An error happened.
// });

// Enviar um e-mail de redefinição de senha com o método sendPasswordResetEmail
// const auth = firebase.auth();
// const emailAddress = 'user@example.com';

// auth.sendPasswordResetEmail(emailAddress).then(() => {
//   // Email sent.
// }).catch((error) => {
//   // An error happened.
// });

// Excluir um usuário
// user.delete().then(() => {
//   // User deleted.
// }).catch((error) => {
//   // An error happened.
// });
