export const createProfile = (email, password) => {
  
firebase
.auth()
.createUserWithEmailAndPassword(email, password);
};
