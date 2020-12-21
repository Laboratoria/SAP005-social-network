// import { firebaseConfig } from  "config/config.js"
// // exporte suas funções

const email = "teste2@gmail.com"
const password = "eutomuitoputa"



export const createUser = () => {

  firebase
  .auth().createUserWithEmailAndPassword(email, password)
  .then(() => console.log("deu certo"))
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("deu ruim")
    // ..
  });
};
