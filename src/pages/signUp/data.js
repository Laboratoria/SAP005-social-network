// export const register = (name, email, password) => {firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then((cred) => {
//     window.location.hash = ('#login');
//     cred.user.updateProfile({ displayName: name });
//   })
//   .catch(() => {
//     alert('Algo deu errado. Por favor, tente novamente.');
//   });
// }