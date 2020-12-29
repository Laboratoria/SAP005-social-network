export const Subscribe = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <nav class="login-inputs">
      <ul>
        <li> <form action=""> <input id='new-email' class="input-login" type="text" placeholder="Email"> </form> </li>
        <li> <form action=""> <input id='new-password' class="input-login" autocomplete="on" type="password" placeholder="Senha"> </form> </li>
        <li> <button id="subscribe-button" class="button-confirm">Cadastre</button> </li>
      </ul>
    </nav>
    `
    ;
  return rootElement;
};
 


