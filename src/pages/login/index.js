// import { onNavigate } from './utils/history.js';
// const change = onNavigate();
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
  const signIn = rootElement.querySelector('#signIn');
  const signUp = rootElement.querySelector('#signUp');
  const register = rootElement.querySelector('#register');
  const signUpGoogle = rootElement.querySelector('#google');
  const signUpFb = rootElement.querySelector('#facebook');
  const signUpGh = rootElement.querySelector('#github');
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

  //TODO: mudar de página
  signIn.addEventListener("click", e => {
    signIn.style.background = '#FEBB86';
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    const promise = firebase.auth().signInWithEmailAndPassword(email, password);
    promise
      .then(() => {
        console.log("Deu bom");
        // window.history.pushState('/');
        // onNavigate('/');
        // change('/');
        // return ('/');
        window.history.pushState('/');
      })
      .catch(() => {
        console.log("Deu ruim")
      });
  });

  //TODO: Mudar de página
  signUp.addEventListener("click", e => {
    signUp.style.background = '#FEBB86';
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise
    .then(() => {
      console.log("Deu bom")
      window.history.pushState('/');
    })
    .catch(() => {
      console.log("Deu ruim")
    });
  });

  /*
  //Autentificação em tempo real
  firebase.auth().onAuthStateChange (firebaseUser => {});
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("não está logando");
  }
  */
 /*
 //LogOut
 firebase.auth().signOut
 */

  //TODO: Não utilizar o popup pelo celular
  signUpGoogle.addEventListener("click", () => {
    console.log("google");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log("usuario", result.user);
      console.log("token", result.credential.accessToken);
      window.history.pushState('/');
    //TODO: verificar essa parte da mensagem de erros
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  });

  signUpFb.addEventListener("click", () => {
    console.log("facebook");
  });
  signUpGh.addEventListener("click", () => {
    console.log("github");
  });
  register.addEventListener("click", () => {
    console.log("register");
  });
  return rootElement;
};


/*
  Próximas etapas:
  >>>Mudar a rota das páginas<<<
  Fazer e organizar as mensagens de erro
  Registro pelo fb e pelo github
  Não utilizar o popup pelo celular
  >>>Testes unitários<<<
  >>>Fazer um formulário HTML<<<
  >>>Dar opção de deixar senha vísivel com checkbox<<<
  >>>Deixar acessível<<<

  Dúvidas:
  Por que não vai com getElementById?
  Por que eu não consigo acessar o rootElement de fora?
*/

/*
history.replaceState()
replaceState() é particularmente útil quando você quer atualiza o objeto de estado ou a URL 
da atual entrada do histórico como resposta a alguma ação do usuário.
*/