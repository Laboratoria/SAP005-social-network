export const login = {
  signIn(email, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  },
};

export const signGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider);
};

export const signFacebook = () => {

}