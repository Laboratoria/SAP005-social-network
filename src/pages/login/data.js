// export const Conta = () => {
//    var provider = new firebase.auth.EmailAuthProvider();
//   firebase.auth().createUserWithEmailAndPassword(provider).then(function(result) {
//     var token = result.credential.accessToken;
//     var user = result.user;
//     history.pushState(null, null, "/home");
//       renderPage()
//   }).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     var email = error.email;
//     var credential = error.credential;
//   });
// };

export const Email = (email, senha) => {
  // var provider = new firebase.auth.EmailAuthProvider();
  firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
    alert('usuario criado e logado');
  }).catch(() => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const email = error.email;
    // const credential = error.credential;
  });
};
