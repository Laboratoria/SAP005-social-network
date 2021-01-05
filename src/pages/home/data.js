export const login = {
  singIn(email, passaword) {
    return firebase
      .auth()
      .singInWithEmailAndPassword(email, passaword);
  },
};
export const signGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider);
};
