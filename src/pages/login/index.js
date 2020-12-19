import { getUsers } from '../../services/index.js'
const users = getUsers();
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
        <button class="enter-button" id="login">Entrar</button>
        <p class="subtitle">_______________ OU _______________</p>
        <section class="login-social-media">
          <button id="google" class="input-icon"><img src='../../img/google.svg' height="50px" width="50px" alt="Logo Google na cor laranja"></button>
          <button id="facebook" class="input-icon"><img src='../../img/facebook.svg' height="50px" width="50px" alt="Logo Facebook na cor laranja"></button>
          <button id="github" class="input-icon"><img src='../../img/github.svg' height="50px" width="50px" alt="Logo GitHub na cor laranja"></button>
        </section>  
        <p class="subtitle">Não tem uma conta?
        <button id="createAccount" class="input-in-text">Registre-se</button>
        </p>
      </section>
    </section>    
  `;
  const singIn = rootElement.querySelector('#login');
  const singUp = rootElement.querySelector('#createAccount');
  singIn.addEventListener("mouseenter", () => {
    singIn.style.background = '#FEBB86';
  });
  singIn.addEventListener("mouseout", () => {
    singIn.style.background = '#FF780F';
  });
  singIn.addEventListener("click", () => {
    singIn.style.background = '#FEBB86';
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    const found = users.find(element => element.email === email);
    if (found !== undefined && password === found.password) {
      console.log("Bem-vinda")
    //routeRender('/');  window.location.'home'
    } else {
      console.log("E-mail ou senha inválidos")
    //printar essa mensagem na tela
    }
  });
  rootElement.querySelector("#google").addEventListener("click", loginGoogle);
  rootElement.querySelector("#facebook").addEventListener("click", loginFacebook);
  rootElement.querySelector("#github").addEventListener("click", loginGitHub);

  singUp.addEventListener("click", () => {
    console.log('create an account');
    //onNavigate('/register)
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
  >>>Mudar a rota das páginas<<<
  >>>Autentificação com Firebase<<<
  >>>Testes unitários<<<
  
  Dúvidas:
  Por que não vai com getElementById? 
  Por que eu não consigo acessar o rootElement de fora?
  
  UI - UX:
  Opção de deixar vísivel a senha (com um checkbox)
  Mandar mensagem de campo vazio | oninvalid="alert("Por favor, preencha o campo!');" required | quando fizer o formulário /  required oninvalid="setCustomValidity('Por favor, preencha o nome')" / <input type="text" name="txtnome" required oninvalid="setCustomValidity('Por favor, preencha o nome')" onchange="try{setCustomValidity('')}catch(e){}" />
  Efeitos de Mouse quando clica nos inputs de texto e no botão
  Acessibilidade
  */

//função de printar na tela

/*função de pegar o valor da tela
pega o valor, crio uma constante chamando a função que vai fazer a mudança, passo os parâmetros
passo a função de printar com o pâmetro do resultado da constante
*/