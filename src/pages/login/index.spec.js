import { Login } from './index.js';

const registerButton= document.querySelector("#register")
const loginButton= document.querySelector("#login")

    registerButton.addEventListener( () => {
    document
      .addEventListener('change', (e) => {
        e.preventDefault();
      });
    },

    loginButton.addEventListener( () => {      
    document
      .addEventListener('change', (e) => {
        e.preventDefault();      
      });
    },
    console.log("registerButton")

  

//     firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(() => {
//       const userCollectionRegister = firebase.firestore().collection('users');
//       firebase.auth().onAuthStateChanged((user) => {
//         userCollectionRegister
//           .doc(user.uid)
//           .set({
//             name,
//             lastName,
//             dateBirth,
//             city,
//           })
//           .then(() => {
//             window.location.href = '/#policy';
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       });
//     })
//     .catch(() => {
//       alert('Email já cadastrado');
//     });
// };

   
    //    var auth = null;
    //     firebase.auth().createUserWithEmmailPassword( document.getElementById("e-mail").value, document.getElementById("password").value)
    //     .then(function(user){
    //         alert("Cadastrado com sucesso");
    //          auth = user;
    //     })  .catch(function (error){
    //         alert("Falha ao Cadastar");  
    //     });
    
    
    // describe('Login', () => {
//   it('should be a function', () => {
//     function register () {
//     expect(typeof Login).toBe('function');
//   });
// });
