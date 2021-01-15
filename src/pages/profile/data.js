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

// Deletar usuario
// user.delete().then(function() {
//   // User deleted.
// }).catch(function(error) {
//   // An error happened.
// });
// alterar o email do usuario
// var user = firebase.auth().currentUser;

// user.updateEmail("user@example.com").then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });
