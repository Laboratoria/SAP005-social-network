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

// Logar com email e senha
export const loginWithEmail = (email, password) => firebase
  .auth()
  .signInWithEmailAndPassword(email, password);

// Logar com a conta Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider);
};

// Criar um usuario com Email diferente
export const createProfile = (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password);

// Criar um usuario no Firestore com Google
export const createuser = () => {
  const uid = firebase.auth().currentUser.uid;
  const user = {
    displayName: firebase.auth().currentUser.displayName,
    email: firebase.auth().currentUser.email,
    photoURL: firebase.auth().currentUser.photoURL,
  };
  return firebase
    .firestore().collection('users').doc(uid).set({ user });
};

// Enviar um e-mail de verificação a um usuário
export const confirmEmail = () => {
  firebase
    .auth()
    .currentUser
    .sendEmailVerification();
};

export const currentUser = () => firebase.auth().currentUser;

// Excluir um usuário
export const delUser = () => firebase.firestore().user.delete();

// Incluir no Firetore o usuario com email
// export const createUserEmail = () => {
//   const uid = firebase.auth().currentUser.uid;
//   return firebase
//     .firestore().collection('users').doc(uid).set({ });
// };

//   UID
export const userId = () => {
  const idUser = firebase.auth().currentUser.uid;
  const id = idUser.id;
  return id;
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

// Enviar um e-mail de redefinição de senha com o método sendPasswordResetEmail
// const auth = firebase.auth();
// const emailAddress = 'user@example.com';

// auth.sendPasswordResetEmail(emailAddress).then(() => {
//   // Email sent.
// }).catch((error) => {
//   // An error happened.
// });

// com essa função conseguimos pegar o usuario e puxar os dados
// const user = (firebase.auth().currentUser);

// com essa função podemos verificar se o usuario está realmente logado
// const login = firebase.auth().onAuthStateChanged(() => {
//   if (user != null) {
//     alert('Usuario está logado');
//   } else {
//     alert('Usuario não está logado');
//   }
// });

// const registerUser = {
//   name: user.displayName,
// };
//   Receber informações específicas de provedor do perfil de um usuário
//  receber as informações de perfil recuperadas dos provedores de login
// vinculados a um usuário, use a propriedade providerData
// if (user != null) {
//   user.providerData.forEach((profile) => {
//     console.log(`Sign-in provider: ${profile.providerId}`);
//     console.log(`  Provider-specific UID: ${profile.uid}`);
//     console.log(`  Name: ${profile.displayName}`);
//     console.log(`  Email: ${profile.email}`);
//     console.log(`  Photo URL: ${profile.photoURL}`);
//   });
// }

// alterar o email do usuario
// var user = firebase.auth().currentUser;
// user.updateEmail("user@example.com").then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });
