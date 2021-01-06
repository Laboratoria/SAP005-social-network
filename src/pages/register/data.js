export const createProfile = (email, password) => {
  userRegister(email, password){
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  }
};
export const createUser = (email, city, date) => {
  userNew(email, city, date) {
    return Firebase
  }
}