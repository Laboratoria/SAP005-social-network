export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="main-register">
  <img src="/images/logo-deva.png">
  <div class="register">
    <form>
      <input type="text" placeholder="Nome completo">
      </input>
      <input type="text" placeholder="Nome de usuária">
      </input>
      <input type="text" placeholder="Insira seu email">
      </input>
      <input type="text" placeholder="Insira sua senha">
      </input>
      <input type="text" placeholder="Confirmar senha">
      </input>
      <button type="submit">CADASTRE-SE</button>
    </form>
  </div>
</div>
  `;
  return rootElement;
};