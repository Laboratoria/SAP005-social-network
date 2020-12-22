//--------------------- TODO: Usar formulário HTML ---------------------\\
export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <section class="login">  
      <section class="left">  
        <img src='../../img/ada-lovelace.svg' width="175px" height="175px" alt="Desenho do rosto de Ada Lovelace em preto com um fundo redondo alaranjado">
        <p class="theme"><span class="logoname">[Ada]</span> Programe como uma mulher.</p>
      </section>
      <section class="right">  
        <input type="email" id="email" class="input-in-line" placeholder="E-mail">
        <input type="password" id="password" class="input-in-line" placeholder="Password">
        <section id="errorLogin" class="errorMessage"></section> 
        <section id="login-button"">
          <button class="enter-button" id="signIn">Sign In</button> 
          <button class="enter-button" id="signUp">Sign Up</button>
        </section>  
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
  const signIn = rootElement.querySelector('#signIn');
  const signUp = rootElement.querySelector('#signUp');
  const register = rootElement.querySelector('#register');
  const signUpGoogle = rootElement.querySelector('#google');
  const signUpFb = rootElement.querySelector('#facebook');
  const signUpGh = rootElement.querySelector('#github');
  //------------------ EVENTOS DE MOUSE PARA USABILIDADE  ------------------\\
  signIn.addEventListener("mouseenter", () => {
    signIn.style.background = '#FEBB86';
  });
  signIn.addEventListener("mouseout", () => {
    signIn.style.background = '#FF780F';
  });
  signUp.addEventListener("mouseenter", () => {
    signUp.style.background = '#FEBB86';
  });
  signUp.addEventListener("mouseout", () => {
    signUp.style.background = '#FF780F';
  });
  register.addEventListener("mouseenter", () => {
    register.style.textDecoration = 'underline';
  });
  register.addEventListener("mouseout", () => {
    register.style.textDecoration = 'none';
  });
  //--------------------- FUNÇÕES DE AUTENTIFICAÇÃO ----------------------\\
  //-------------- TODO: Uso correto de erros para promessas --------------\\  
  signIn.addEventListener("click", e => {
    signIn.style.background = '#FEBB86';
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    const promise = firebase.auth().signInWithEmailAndPassword(email, password);
    promise
      .then(() => {
        window.location = '/';
      })
      .catch(() => {
        const elementError = document.createElement("p");
        const errorMessage = document.createTextNode(`E-mail ou senha inválida. Por favor, tente novamente.`);
        elementError.appendChild(errorMessage);
        document.getElementById("errorLogin").appendChild(elementError);
      });
  });
  signUp.addEventListener("click", e => {
    signUp.style.background = '#FEBB86';
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise
      .then(() => {
        window.location = '/';
      })
      .catch(() => {
        console.log("Deu ruim")
      });
  });

  //---------------- TODO: Não abrir popup / mobile first ----------------\\
  signUpGoogle.addEventListener("click", () => {
    console.log("google");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log("usuario", result.user);
        console.log("token", result.credential.accessToken);
      }).catch(() => {
        console.log("O e-mail já tem conta")
      });
  });

  //---------------- TODO: Usar outros provedores de login ----------------\\
  signUpFb.addEventListener("click", () => {
    console.log("facebook");
  });
  signUpGh.addEventListener("click", () => {
    console.log("github");
  });

  //---------- ENCAMINHAR PARA O FORMULÁRIO DE CRIAÇÃO DE PERFIL ----------\\
  //---------------- TODO: Mudar para a página de registro ----------------\\
  register.addEventListener("click", () => {
    window.location = '/';
  });
  return rootElement;
};
//---------------- AUTENTIFICAÇÃO DO USUÁRIO EM TEMPO REAL ----------------\\
/*
  firebase.auth().onAuthStateChange (firebaseUser => {});
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("não está logando");
  }
*/

//---------------- FUNÇÃO DE LOGOUT ----------------\\
/*
  firebase.auth().signOut
*/