/*
const email = "teste@teste.com"
const password = "chocolate"

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log("hello")
  })
  .catch((error) => {
    console.log("deu ruim")
    var errorCode = error.code;
    var errorMessage = error.message;
  });
*/
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
        <button class="enter-button" id="login">Login</button> <button class="enter-button" id="singUp">Sing Up</button>
        <p class="subtitle">_______________ OU _______________</p>
        <section class="login-social-media">
          <button id="google" class="button-icon"><img src='../../img/google.svg' height="50px" width="50px" alt="Logo Google na cor laranja"></button>
          <button id="facebook" class="button-icon"><img src='../../img/facebook.svg' height="50px" width="50px" alt="Logo Facebook na cor laranja"></button>
          <button id="github" class="button-icon"><img src='../../img/github.svg' height="50px" width="50px" alt="Logo GitHub na cor laranja"></button>
        </section>  
        <p class="subtitle">Não tem uma conta?
        <button id="createAccount" class="button-text">Registre-se</button>
        </p>
      </section>
    </section>    
  `;

  const singIn = rootElement.querySelector('#login');
  const singUp = rootElement.querySelector('#createAccount');
  const singUpGoogle = rootElement.querySelector('#google');
  const singUpFb = rootElement.querySelector('#facebook');
  const singUpGh = rootElement.querySelector('#github');
  singIn.addEventListener("mouseenter", () => {
    singIn.style.background = '#FEBB86';
  });
  singIn.addEventListener("mouseout", () => {
    singIn.style.background = '#FF780F';
  });
  singUp.addEventListener("mouseenter", () => {
    singUp.style.textDecoration = 'underline';
  });
  singUp.addEventListener("mouseout", () => {
    singUp.style.textDecoration = 'none';
  });
  singIn.addEventListener("click", e => {
    singIn.style.background = '#FEBB86';
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    const auth = firebase.auth();
    //vai retornar uma promessa e dá pra trabalhar de maneira assíncrona
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log (e.message));


    auth.createUsernWithEmailAndPassword(email, password);
    auth.onAuthStateChange (firebaseUser => {});



  });
  singUpGoogle.addEventListener("click", loginGoogle);
  singUpFb.addEventListener("click", loginFacebook);
  singUpGh.addEventListener("click", loginGitHub);
  singUp.addEventListener("click", () => {
    console.log('create an account');
  });
  return rootElement;
};









function loginGoogle() {
  console.log('google');
}
function loginFacebook() {
  console.log('facebook');
}
function loginGitHub() {
  console.log('github');
}




  /*
  Etapas importantes:
  >>>Autentificação com Firebase<<<
  >>>Mudar a rota das páginas<<<
  >>>Testes unitários<<<
  
  Dúvidas:
  Por que não vai com getElementById? 
  Por que eu não consigo acessar o rootElement de fora?
  
  UI - UX:
  Opção de deixar vísivel a senha (com um checkbox)
  Input e-mail tá ficando azul
  Mandar mensagem de campo vazio
  Acessibilidade
  */
