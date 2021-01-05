// exporte suas funções

export const validation = (person) => {
  firebase.auth()
    .createUserWithEmailAndPassword(person.email, person.password)
    .then(user => { console.log('usuario', user) })
    .catch('lascou');
};

export const persist = (person) => {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(person.email, person.password);
  })
  .catch("setar erro");
};

export const createUser = (person) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(person.email, person.password)
    .then(() =>
      firebase.auth().currentUser.updateProfile({ displayName: person.name })
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set(person))
    .catch((error) => console.log(error));
};