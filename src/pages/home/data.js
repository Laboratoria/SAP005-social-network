// import { email, password } from './index.js';

// export const login = () => {
//   firebase
//     .auth()
//     .singInWithEmailAndPassword(email, password);
// };

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider);
};

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
