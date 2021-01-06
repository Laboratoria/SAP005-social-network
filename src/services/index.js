// exporte suas funções

export const validation = (person) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(person.email, person.password)
    .then((user) => {
      console.log('usuario', user);
    })
    .catch('lascou');
};

export const persist = (person) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() =>
      firebase.auth().signInWithEmailAndPassword(person.email, person.password),
    )
    .catch('setar erro');
};

export const createUser = (person) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(person.email, person.password)
    .then(function () {
      firebase.auth().currentUser.updateProfile({
        displayName: person.name,
      });
      firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(person);
    })
    .then(function() {
      alert("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
};
