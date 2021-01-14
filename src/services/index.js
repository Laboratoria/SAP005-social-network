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

export const loginWithEmail = (email, password) => firebase
  .auth()
  .signInWithEmailAndPassword(email, password);

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider);
};
export const createuser = () => {
  const uid = firebase.auth().currentUser.uid;
  const user = {
    displayName: firebase.auth().currentUser.displayName,
    email: firebase.auth().currentUser.email,
    phoneNumber: firebase.auth().currentUser.phoneNumber,
    photoUrl: firebase.auth().currentUser.photoURL,
  };
  return firebase
    .firestore().collection('users').doc(uid).set({ user });
};

export const currentUser = () => firebase.auth().currentUser;

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

// importar para o firebase um usuario
// import { db} from './init.js'
// export newUser = () => {
// db.collection('users').add({
//   userUid:
//   photo:
//   name:
//   email:
//   date:
//   city:
// });
// }

//   UID
export const userId = () => {
  const idUser = firebase.auth().currentUser.uid;
  const id = idUser.id;
  return id;
};

// Perfil
// export const createProfile = () => {
//   firebase
//     .firestore()
//     .collection('users').doc(userId()).set({
//       email: firebase
//         .auth()
//         .currentUser
//         .email,
//     });
// };

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
