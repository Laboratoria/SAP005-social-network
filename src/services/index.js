import { onNavigate } from '../utils/history.js';

   // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCbZDARuyhS8ESOT1gKUou6G7oOOikC8sM",
    authDomain: "social-network-lab-pnd.firebaseapp.com",
    projectId: "social-network-lab-pnd",
    storageBucket: "social-network-lab-pnd.appspot.com",
    messagingSenderId: "693936274709",
    appId: "1:693936274709:web:840380126cb7b04fcf7d1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const dataBase = firebase.firestore()

// FUNÇÃO FIREBASE -> CADASTRO

export const subscribe = (email, password, name) => {
  let userLog = firebase.auth().currentUser

  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
   console.log('usuário', user);
  }).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    return {errorCode, errorMessage}
  })
  if(userLog != null){
    userLog.updateProfile({displayName: name})
    console.log('Nome: ', user.displayName)
  }
}

// FUNÇÕES FIREBASE -> LOGIN

export const emailLogin = (email,password) => {

  firebase.auth().signInWithEmailAndPassword(email, password).then(() =>{
    console.log('Usuario logado');
  }).catch(error => {
    console.log ('error', error);
  })
}

export const googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result => {
    let token = result.credential.accessToken;
    let user = result.user;

    console.log('usuário', user)
    console.log('token', token);
  }).catch (error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;

    console.log('erro', errorCode, errorMessage, email, credential);
  }) 
}
// FUNÇÃO DE CONFIRMAÇÃO : USUÁRIO LOGADO

export const userOn = () => {
firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
      document.getElementById('main-page').style.display = "none";
      document.getElementById('root').style.width = "100%";
      onNavigate('/feed');
      Post();
      logOut();     
  } 
  else {
    document.getElementById('main-page').style.display = "block";
    onNavigate('/');
  }
 }) 
}
// FUNÇÕES FIREBASE -> FEED
export const Post = () => {

  document.getElementById('post-it').addEventListener('click', (e) => {
     e.preventDefault();
  
     let postText = document.getElementById('write-post').value
        
        dataBase.collection('Posts').add({
        post_text: postText,
        date: new Date(),
        id_user: firebase.auth().currentUser.uid,
        username: firebase.auth().currentUser.displayName,
        likes: 0,
        loveIt: 0
      })
      .then(function() {
        console.log("Post enviado com sucesso!");
        onNavigate('/feed')
      })
      .catch(function() {
        console.error("Ocorreu um erro");
      });
      document.getElementById('write-post').value = " "
    })
  } 
 
  export const getPosts = () => {
    const post = dataBase.collection('Posts').orderBy("date", "desc")
    return post.get()
    };
  
  export const Like = (id) => {
    dataBase.collection('Posts').doc(`${id}`).update({
    likes: firebase.firestore.FieldValue.increment(1)
    }).then(() => {
      onNavigate('/feed');
    })
  }
  export const Dislike = (id) => {
    dataBase.collection('Posts').doc(`${id}`).update({
    likes: firebase.firestore.FieldValue.increment(-1)
     }).then(() => {
      onNavigate('/feed');
    })
   }

  export const Love = (id) => {
    dataBase.collection('Posts').doc(`${id}`).update({
    loveIt: firebase.firestore.FieldValue.increment(1)
    }).then(() => {
      onNavigate('/feed');
    })
  }
  
  export const logOut = () => {
           
    document.getElementById('log-out').addEventListener("click", logOut)
    function logOut() {
       firebase.auth().signOut().then(() => {
        document.getElementById('root').innerHTML= " ";
        document.getElementById('main-page').style.display = "block";           
        })
       }  
      }
    