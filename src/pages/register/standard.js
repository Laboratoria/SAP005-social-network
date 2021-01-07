export const newUser = () => {
  const template = `
  <div class="main-register">
  <img class="logo" src="../../images/logo-deva.png"/>
  <div class="register">
    <form class="register-input">
      <input class="register-input" id="register-name" type="text" placeholder="Nome completo">
      </input>
      <input class="register-input" id="register-userID" type="text" placeholder="Nome de usuária">
      </input>
      <input class="register-input" id="register-email" type="text" placeholder="Insira seu email">
      </input>
      <input class="register-input" id="register-pass" type="password" minlength="8" required placeholder="Insira sua senha">
      </input>
      <input class="register-input" id="register-passConfirm" type="password" minlength="8" required placeholder="Confirmar senha">
      </input>
      <p id="doesntMatch"></p>
      <button class="register-input" id="btn-register-confirm" type="submit">CADASTRE-SE</button>
    </form>
  </div>
</div>
  `;
  return template;
};

