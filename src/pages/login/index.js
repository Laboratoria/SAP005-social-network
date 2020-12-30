export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <nav class="login-inputs">
    <ul>
      <li> <form action=""> <input id="user-in" class="input-login" type="text" placeholder="Email"> </form> </li> 
      <li> <form action=""> <input id="password-in" class="input-login" autocomplete="on" type="password" placeholder="Senha"> </form> </li> 
      <li> <button id="login-button" class="button-confirm">Entrar</button> </li> 
    </ul>
  </nav>
  `;
  return rootElement;
};

