import { onNavigate } from "../../utils/history.js"

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((user) => {
      onNavigate('/feed');
      alert(`Bem-vindo ao Olimpo, ${user.displayName}!`);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const loginPrincipal = (email, senha) => {
  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((user) => {
      onNavigate('/feed');
      alert(`Bem-vindo ao Olimpo, ${user.displayName}!`);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const newRegistry = (email, senha) => {
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
      onNavigate('/login');
      alert(`Usuário cadastrado com sucesso! Faça seu login para acessar a rede.`);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    });
};

export const Navigation = () => {
  const navigation = document.createElement('nav');
  navigation.classList.add('navigation')
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
    firebase.auth().signOut().then(function() {
      onNavigate('/');
    }).catch(function(error) {
      console.log(error)
    });
  });
  return navigation;
};
