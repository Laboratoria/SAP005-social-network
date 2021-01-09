export const createProfile = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      user.up
    })
};

// export const createUser = (email, city, date) => {
//     userNew(email, city, date) {
//     firebase
//     }
// };
