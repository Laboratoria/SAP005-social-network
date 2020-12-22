import {
  authEmail,
  authGoogle,
  authFacebook,
  email,
  password,
  btn,
} from "./pages/login/index.js";

// Buttons
const btn = document.getElementById("btn");
const authEmail = document.getElementById("authEmail");
const authGoogle = document.getElementById("authGoogle");
const authFacebook = document.getElementById("authFacebook");

//Inputs
const email = document.getElementById("email");
const password = document.getElementById("password");

// Criar Usuario
export const btnAuth = (btn) => {
  btn.addEventListener("click", () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(() => {
        alert("Cadastro realizado");
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert("Falha ao cadastrar");
      });
  });
};

// Autenticação email e senha
export const emailAndPwdAuth = (authEmail) => {
  authEmail.addEventListener("click", () => {
    firebase
      .auth()
      .singInWithEmailAndPassword(email.value, password.value)
      .then((result) => {
        console.log(result);
        alert("E-mail autenticado" + email.value);
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert("Falha na autenticação!");
      });
  });
};

// Autenticação com o Google
export const googleAuth = (authGoogle) => {
  authGoogle.addEventListener("click", () => {
    const provider = new firebase.auth.authGoogleProvider();
    signIn(provider);
  });
};

function signIn(provider) {
  // firebase
  // .auth()
  // .singInWithPoup(provider)
  // .then((result)=> {
  //     console.log(result);
  //     let token = result.credential.accessToken;
  // })
  // .catch((error)=> {
  //     console.log(error);
  //     alert("Falha na autenticação");
  // });
}
