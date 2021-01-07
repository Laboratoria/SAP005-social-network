export const createProfile = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
};

// export const createUser = (email, city, date) => {
//     userNew(email, city, date) {
//     firebase
//     }
// };
