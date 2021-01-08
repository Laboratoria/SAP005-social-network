export const singnIn = (email, password, onError) => {
  firebase
  .auth()
  .singnInWithEmailAndPassword(email, password)
  .then((result) =>{
    window.location.pathname = '#feed';
    return result;
  })  
  .catch(error => onError(error)); 
};

export const LoginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.pathname = '#feed';
      return result;
    }).catch(error => error);
};