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

// FUNÇÃO FIREBASE -> CADASTRO

export const subscribe = () => {
  let email = document.getElementById('new-email').value;
  let password = document.getElementById('password-register').value;
  let userName = document.getElementById('name').value;
  let userLog = firebase.auth().currentUser

  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
   console.log('usuário', user);
  }).cath((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    return {errorCode, errorMessage}
  })
  if(userLog != null){
    userLog.updateProfile({displayName: userName})
    console.log('Nome: ', user.displayName)
  }
}

// FUNÇÕES FIREBASE -> LOGIN

export const emailLogin = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById ('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(() =>{
    console.log('Usuario logado');
  }).cath(error => {
    console.log ('error', error);
  })
}

export const googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(resposta => {
    console.log('usuário', resposta.user);
    console.log('token', resposta.credential.accessToken);
  }).cath (erro => {
    console.log('erro', erro);
  })
}
// FUNÇÃO DE CONFIRMAÇÃO : USUÁRIO LOGADO

export const userOn = () => {
firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
      document.getElementById('main-page').style.display = "none";
      document.getElementById('root').style.width = "100%"
      onNavigate('/feed');
      Post();
      Reacts();
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
     
       firebase.firestore().collection('posts').add({
        post_text: postText,
        id_user: firebase.auth().currentUser.uid,
        username: firebase.auth().currentUser.displayName,
        likes: 0,
        loveIt: 0,
        funny: 0,
        congratulations: 0,
        date: new Date()
      })
      .then(function() {
        document.querySelector('.user-post').innerHTML =
        `<img class='another-user-photo' src='./pages/feed/img/profile/profile-exemple.jpg' 
           alt='Foto do usuário que postou'>
          <p> ${getPosts()} </p>`
        console.log("Post enviado com sucesso!");
      })
      .catch(function() {
        console.error("Ocorreu um erro");
      });
    })
  }
  
  export const getPosts = () => {
    firebase.firestore().collection('post').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
         console.log(`${doc.post_text}`)
         return doc.post_text 
        })
      })  
    };
  
  export const Reacts = () => {
  
  document.getElementById('like').addEventListener("click", (e) => {
      e.preventDefault();
      console.log('Clicoooou');
      firebase.collection('posts').update({
       likes: firebase.firestore.FieldValue.increment(1)
      })
    })
  }
  
  export const logOut = () => {
           
    document.getElementById('log-out').addEventListener("click", logOut)
    function logOut() {
       firebase.auth().signOut().then(() => {
        document.getElementById('root').innerHTML= " "           
                     /* 
                      if(window.innerWidth <= 500){
                          document.getElementById('header-document').style.display = "block"
                          document.getElementById('header-document').style.width = "100%"
                          document.getElementById('logo-name').style.width = "100%"
                      } */
                  })
             }
          }
   


















/*
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection('messages').add({original: original});
  // Send back a message that we've succesfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

//export const myFunction = () => {
  // seu código aqui
//  console.log('Olá mundo!');
//};

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
    .onCreate((snap, context) => {
      // Grab the current value of what was written to Cloud Firestore.
      const original = snap.data().original;

      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log('Uppercasing', context.params.documentId, original);

      const uppercase = original.toUpperCase();

      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to Cloud Firestore.
      // Setting an 'uppercase' field in Cloud Firestore document returns a Promise.
      return snap.ref.set({uppercase}, {merge: true});
    });

*/