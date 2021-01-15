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
     let userId = firebase.auth().currentUser.uid
     let postText = document.getElementById('write-post').value
        
        dataBase.collection('Posts').add({
        post_text: postText,
        date: new Date(),
        id_user: userId,
        username: firebase.auth().currentUser.displayName,
        likes: [],
        loveIt: []
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
    let userId = firebase.auth().currentUser.uid
    dataBase.collection('Posts').doc(`${id}`).update({
    likes: firebase.firestore.FieldValue.arrayUnion(userId)
    }).then(() => {
      onNavigate('/feed');
    })
  }
  export const Dislike = (id) => {
    let userId = firebase.auth().currentUser.uid
    dataBase.collection('Posts').doc(`${id}`).update({
    likes: firebase.firestore.FieldValue.arrayRemove(userId)
     }).then(() => {
      onNavigate('/feed');
    })
   }

  export const Love = (id) => {
    let userId = firebase.auth().currentUser.uid
    dataBase.collection('Posts').doc(`${id}`).update({
      loveIt: firebase.firestore.FieldValue.arrayUnion(userId)
    }).then(() => {
      onNavigate('/feed');
    })
  }
  export const Unlove = (id) => {
    let userId = firebase.auth().currentUser.uid
    dataBase.collection('Posts').doc(`${id}`).update({
     loveIt: firebase.firestore.FieldValue.arrayRemove(userId)
     }).then(() => {
      onNavigate('/feed');
    })
   }

  const logOut = () => {
           
    document.getElementById('log-out').addEventListener("click", logOut)
    function logOut() {
       firebase.auth().signOut().then(() => {
        document.getElementById('root').innerHTML= " ";
        document.getElementById('main-page').style.display = "block";           
        })
       }  
      }

      export function errorRegister(){
  
        let email = document.getElementById('new-email').value;
        let password = document.getElementById('password-register').value;
        let userName = document.getElementById('name').value;
     
       if(userName =="" || userName.lengtht < 5)
       {
         alert( "Preencha seu NOME corretamente!" );
         userName.focus();
         return false;
       }
       
       
       if( email =="" || email.indexOf('@')==-1 || email.indexOf('.')==-1 )
       {
         alert( "Preencha seu E-MAIL corretamente!" );
         email.focus();
         return false;
       }
       
       if(password =="" || password == "")
       {
         alert( "Preencha seu NOME corretamente!" );
         password.focus();
       return false;
       }
       
       return true;
     }
    