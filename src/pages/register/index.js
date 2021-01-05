export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="main-register">
  <img class="logo" src="/images/logo-deva.png">
  <div class="register">
    <form class="register-input">
      <input class="register-input" type="text" placeholder="Nome completo">
      </input>
      <input class="register-input" type="text" placeholder="Nome de usuária">
      </input>
      <input class="register-input" type="text" placeholder="Insira seu email">
      </input>
      <input class="register-input" type="text" placeholder="Insira sua senha">
      </input>
      <input class="register-input" type="text" placeholder="Confirmar senha">
      </input>
      <button class="register-input" type="submit">CADASTRE-SE</button>
    </form>
  </div>
</div>
  `;
  return rootElement;
};