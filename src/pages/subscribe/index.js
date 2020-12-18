export const Subscribe = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <nav class="login-inputs">
                  <ul>
                     <a href="#"> <li> <form action=""> <input id="new-user" class="input-login" type="text" placeholder="Nome Completo"> </form> </li> </a>
                     <a href="#"> <li> <form action=""> <input id="new-email" class="input-login" type="text" placeholder="Email"> </form> </li> </a>
                     <a href="#"> <li> <form action=""> <input id="birthday" class="input-login" type="text" placeholder="Data de nascimento"> </form> </li> </a>
                     <a href="#"> <li> <form action=""> <input id="new-password" class="input-login" type="password" placeholder="Senha"> </form> </li> </a>
                     <a href="#"> <li> <form action=""> <input id="repeat-password" class="input-login" type="password" placeholder="Repita a senha"> </form> </li> </a>
                     <a href="#"> <li> <button id="create-account-button" class="button-login">Criar conta</button> </li> </a>
                     
                  </ul>
              </nav>
    `
    ;
  return rootElement;
};
 