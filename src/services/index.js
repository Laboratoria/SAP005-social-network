/* eslint-disable no-alert */
import { onNavigate } from '../utils/history.js';

export const userProfile = (name) => {
  firebase.auth().currentUser.updateProfile({
    displayName: name,
    photoURL: '',
  })
    .then(() => {
      alert('deu muito bom');
    })
    .catch((error) => {
      error.alert('deu muito ruim');
    });
};

export const saveProfile = (user, userEmail, userName) => {
  firebase
    .firestore()
    .collection('users')
    .doc(userEmail)
    .set({
      user: user.uid,
      name: userName,
      email: userEmail,
    })
    .then(() => {
      alert('agora sim deu bom');
    })
    .catch((error) => {
      error.alert('ainda tá dando ruim');
    });
};

export const CreateUser = (name, email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.trim(), password)
    .then((saveUser) => {
      userProfile(name);
      saveProfile(saveUser.user, email, name);
      onNavigate('/feed');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const SingIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.trim(), password)
    .then(() => {
      onNavigate('/feed');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const SingInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      onNavigate('/feed');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const SignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      onNavigate('/');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const IsCurrentUser = (notLoggedPage) => {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        onNavigate('/feed');
      } else {
        onNavigate(notLoggedPage);
      }
    });
};
