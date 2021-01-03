export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="main-login">
    <img src="/images/logo-deva.png">
    <div class="mail-login">
      <form>
        <input type="text" placeholder="Email ou nome de usuária">
        </input>
        <input type="text" placeholder="Insira sua senha">
        </input>
        <button type="submit">LOGIN</button>
      </form>
    </div>
    <h2>OU</h2>
    <div class="google-github-login">
      <button type="submit">Entrar com GOOGLE</button>
      <button type="submit">Entrar com GITHUB</button>
    </div>
    <div class="new-register">
      <p>Não tem uma conta?</p>
      <a href="#">Cadastre-se</a>
    </div>
  </div>
  `;
  return rootElement;
};
