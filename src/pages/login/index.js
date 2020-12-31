import { onNavigate } from '../../utils/history.js';
export const Login = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
    <section class="login">  
      <section class="left">  
        <img src='../../img/ada-lovelace.svg' width="175px" height="175px" alt="Desenho do rosto de Ada Lovelace em preto com um fundo redondo alaranjado">
        <p class="theme"><span class="logoname">[Ada]</span> Programe como uma mulher.</p>
      </section>
      <section class="right">
        <form id="signIn">
          <fieldset class="right">
            <input type="email" id="email" class="input-in-line" placeholder="E-mail" required>
            <input type="password" id="password" class="input-in-line" placeholder="Password" required>
            <section id="errorLogin" class="errorMessage"></section>
          </fieldset>
          <fieldset class="login-button"">
            <button type="submit" class="enter-button">Sign In</button> 
            </fieldset>
        <p class="subtitle">_______________ OU _______________</p>
        <section class="login-button">
          <button id="google" class="button-icon"><img src='../../img/google.svg' height="50px" width="50px" alt="Logo Google na cor laranja"></button>
          <button id="facebook" class="button-icon"><img src='../../img/facebook.svg' height="50px" width="50px" alt="Logo Facebook na cor laranja"></button>
          <button id="github" class="button-icon"><img src='../../img/github.svg' height="50px" width="50px" alt="Logo GitHub na cor laranja"></button>
        </section>  
        <p class="subtitle">Não tem uma conta?
        <button id="register" class="button-text">Registre-se</button>
        </p>
      </section>
    </section>    
  `;
  //---------------------- GUARDANDO TODOS OS INPUTS ---------------------\\
  const signIn = rootElement.querySelector("#signIn");
  const register = rootElement.querySelector("#register");
  const signUpGoogle = rootElement.querySelector("#google");
  const signUpFb = rootElement.querySelector("#facebook");
  const signUpGh = rootElement.querySelector("#github");
  //------------------------- MENSAGENS DE ERRO ------------------------- \\
  const verifyErrorCode = {
    "auth/invalid-email": "O endereço de e-mail não é válido. Por favor, preencha novamente.",
    "auth/invalid-password": "Senha incorreta. Por favor, tente novamente.",
    "auth/email-already-in-use": "O e-mail fornecido já está cadastrado. Por favor, forneça um novo endereço.",
    "auth/user-not-found": "Não há registro desse usuário. Por favor, registre-se para ter acesso à nossa rede.",
    "auth/account-exists-with-different-credential": "E-mail já associado a outra conta. Por favor, tente com um novo endereço.",
    "default": "Ocorreu algum erro. Por favor, tente novamente",
  }
  const errorMessageEmptyInput = "O preenchimento dos campos de e-mail e senha é obrigatório.";
  //---------------------- FUNÇÕES DE AUTENTIFICAÇÃO ----------------------\\
  signIn.addEventListener("submit", event => {
    event.preventDefault();
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    if (email === "" || password === "") {
      printMessageError(errorMessageEmptyInput);
    } else {
      const promise = firebase.auth().signInWithEmailAndPassword(email, password);
      promise
        .then(() => {
          onNavigate('/');
        })
        .catch(err => {
          const errorCode = err.code;
          const errorMessage = verifyErrorCode[errorCode];
          if (errorMessage === null) {
            errorMessage = err.Message;
          }
          printMessageError(errorMessage);
        });
    }
  });
  signUpGoogle.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
      .then(() => {
        onNavigate('/');
      }).catch(err => {
        const errorCode = err.code;
        const errorMessage = verifyErrorCode[errorCode];
        if (errorMessage === null) {
          errorMessage = err.Message;
        }
        printMessageError(errorMessage);
      });
  });
  signUpFb.addEventListener("click", () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider)
      .then(() => {
        onNavigate('/');
      }).catch(err => {
        const errorCode = err.code;
        const errorMessage = verifyErrorCode[errorCode];
        if (errorMessage === null) {
          errorMessage = err.Message;
        }
        printMessageError(errorMessage);
      });
  });
  signUpGh.addEventListener("click", () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider)
      .then(() => {
        onNavigate('/');
      }).catch(err => {
        const errorCode = err.code;
        const errorMessage = verifyErrorCode[errorCode];
        if (errorMessage === null) {
          errorMessage = err.Message;
        }
        printMessageError(errorMessage);
      });
  });
  //---------- ENCAMINHAR PARA O FORMULÁRIO DE CRIAÇÃO DE PERFIL ----------\\
  //---------------- TODO: Mudar para a página de registro ----------------\\
  register.addEventListener("click", () => {
    onNavigate('/');
  });
  return rootElement;
};
function printMessageError(message) {
  const elementError = document.createElement("p");
  const errorMessage = document.createTextNode(message);
  elementError.appendChild(errorMessage);
  document.getElementById("errorLogin").innerHTML = "";
  document.getElementById("errorLogin").appendChild(elementError);
}

/*
//-------------- Fazer a validação do registro ---------------\\
  const signUp = rootElement.querySelector('#signUp');
  signUp.addEventListener("click", e => {
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    if (email === "" || password === "") {
      printMessageError(errorMessageEmptyInput);
    } else {
      const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
      promise
        .then(() => {
          onNavigate('/');
        }).catch(err => {
          const errorCode = err.code;
          const errorMessage = verifyErrorCode[errorCode];
          if (errorMessage == null) {
            errorMessage = err.Message;
          }
          printMessageError(errorMessage);
        });
    }
  });
  Dúvida: 
  *Não haver usuários repetidos (só e-mail ou nome também?).
  Definir um formato de senha (número de caracteres, strings, number, etc.). 
  E inserir uma mensagem de erro, caso a mensagem não atenda aos requisitos. 
  //"auth/weak-password": "A senha é muito fraca.",
  */