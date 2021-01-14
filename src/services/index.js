import { onNavigate } from "../../utils/history.js"

const auth = firebase.auth();

export const loginPrincipal = (email, senha) => {
  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      onNavigate('/feed');
      const user = auth.currentUser;
      alert(`Bem-vindo ao Olimpo, ${user.displayName}!`);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      onNavigate('/feed');
      alert(`Bem-vindo ao Olimpo, ${auth.currentUser.displayName}!`);
      const user = auth.currentUser;
      const uid = user.uid
      firebase.firestore().doc(`/users/${uid}`).set({
        email: user.email,
        name: user.displayName,
      })
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const newRegistry = (email, senha, nameUser) => {
  auth.createUserWithEmailAndPassword(email, senha)
    .then(() => {
      const user = auth.currentUser;

      user.updateProfile({
        displayName: nameUser,

      }).then(function () {
        alert(`${user.displayName} sua conta foi criada com sucesso!`);
        onNavigate('/login');

        const uid = user.uid
        firebase.firestore().doc(`/users/${uid}`).set({
          email: user.email,
          name: nameUser,
        })
      })
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const Navigation = () => {
  const navigation = document.createElement('nav');
  navigation.classList.add('navigation');
  navigation.innerHTML = `
   <ul class="navMenu">
     <li><img src="images/fireHome.png"  id="feed" class="menu-icon"></li>
     <li><img src="images/bell.png"  id="notification" class="menu-icon"></li>
     <li><img src="images/email.png" id="message" class="menu-icon"></li>
     <li><img src="images/profile.png" id="profile" class="menu-icon"></li>
     <li><img src="images/off.png" id="out" class="menu-icon logOut"></li>
   </ul>
  `;

  const bottunNotification = navigation.querySelector('#notification');
  bottunNotification.addEventListener('click', () => {
    onNavigate('/notification');
  });

  const bottunPorfile = navigation.querySelector('#profile');
  bottunPorfile.addEventListener('click', () => {
    onNavigate('/profile');
  });

  const bottunMessage = navigation.querySelector('#message');
  bottunMessage.addEventListener('click', () => {
    onNavigate('/message');
  });

  const bottunFeed = navigation.querySelector('#feed');
  bottunFeed.addEventListener('click', () => {
    onNavigate('/feed');
  });

  const bottunSingOut = navigation.querySelector('#out');
  bottunSingOut.addEventListener('click', () => {
    auth.signOut().then(function () {
      onNavigate('/');
    }).catch(function (error) {
      console.log(error)
    });
  });

  return navigation;
}
export const newPost = (saveTextPost) => {

  const user = firebase.auth().currentUser;
  const docFirestore = firebase.firestore();

  docFirestore.collection(`post`).add({
    name: user.displayName,
    text: saveTextPost,
    date: (new Date()).toLocaleString(),
    uid: user.uid,
  }).catch(() => {
    alert("Não foi possível publicar, tente novamente.")
  });
};

export const post = (name, date, text) => {
  const post = document.createElement('div');
  post.innerHTML = `
  <div class="post">
     <p id="nameUser">${name}</p>
     <p id="textUser">${text}</p>
     <p id="dateUser">${date}</p>

     <button class="curtir">Curtir</button>
        <button class="comentar">Comentar</button>
    
    `;
  return post;
};
export const getPosts = () => {
  firebase.firestore().collection("post").orderBy('date', 'desc')
    .get()
    .then(function (querySnapshot) {
      feedPost.innerHTML = ``
      querySnapshot.forEach(function (doc) {
        const name = doc.data().name;
        const text = doc.data().text;
        const date = doc.data().date;
        feedPost.appendChild(post(name, date, text));
      });
    });
};

//  const curtidasColecao = firebase.database().ref('likes');
// export const likedPost = () => {
//   return curtidasColecao.add({
//     liked: true,
//   })
//   .then(() => {
//     return Promise.resolve(true);
//   })
//   .catch((error) => { 
//     return Promise.reject(error);
//   })
// };
