export const Google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const Facebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const Conta = (email, senha) => {
  
  firebase.auth().createUserWithEmailAndPassword(email,senha).then(user => { 
    console.log('usuario', user);
    alert('usuario criado e logado');
  })
};

export const Email = (email, senha) => {
  
  return firebase.auth().signInWithEmailAndPassword(email, senha ).then(user => {
    console.log('usuario', user);
    alert('usuario logado');
  });
};
