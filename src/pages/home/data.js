export const login = (email, password) => {
  firebase
    .auth()
    .singInWithEmailAndPassword(email, password);
};

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider);
};
