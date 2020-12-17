export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <header class="login-header">
      <nav class="login-inputs">
         <ul>
            <a href="#"> <li> <form action=""> <input id="user-in" class="input-login" type="text" placeholder="Email"> </form> </li> </a>
            <a href="#"> <li> <form action=""> <input id="password-in" class="input-login" type="password" placeholder="Senha"> </form> </li> </a>
            <a href="#"> <li> <button id="button-login" class="button-login">Entrar</button> </li> </a>
            <p>OU</p>
            <a href="#"> <li> <button class="google-login">Continuar com uma conta GOOGLE</button> </li> </a>
            <a class="link-subscribe" href="src/pages/login/subscribe-steps/subscribe.html"> <p> Criar uma conta </p> </a>
         </ul>
      </nav>
   </header>
  `;
  return rootElement;
};

