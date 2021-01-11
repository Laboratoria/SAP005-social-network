export const createUser = (email, password, name, lastName, talents = 'cantar') => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase
        .firestore()
        .collection('Usuarios')
        .doc()
        .set({ name, lastName, talents });
      console.log('usuário criado com sucesso');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim', errorMessage, errorCode);
    });
};

export const userLogin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      const token = result.user.uid;
      const user = result.user;
      console.log(user, token, 'usuário Logado com sucesso');
      return (token, user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim', errorMessage, errorCode);
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-email') {
        return alert('Email ou Senha incorreta!');
      }
      return `Codigo de error: ${errorCode}`;
    });
};

export const gmailLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user, 'Usuário Logado com o google com sucesso', token);
      return (user, token);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log('deu ruim,Usuário não foi logado', errorCode, errorMessage, email, credential);
    });
};

export const userLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('usuário deslogado com sucesso');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim, usuário continua logado', errorMessage, errorCode);
    });
};

export const createPost = (post) => {
  const db = firebase.firestore();
  db.collection('Posts')
    .add({
      post,
      uid: firebase.auth().currentUser.uid,
    }).then(
      console.log('post criado com sucesso'),
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim, post não foi criado.', errorMessage, errorCode);
    });
};
