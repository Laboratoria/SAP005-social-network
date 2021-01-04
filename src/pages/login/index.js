export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="main-login">
    <img class="logo" src="/images/logo-deva.png"/>
    <img class="image-desktop" src="/images/image-desktop.png"/>
    <div class="mail-login">
      <form class="login-input">
        <input class="login-input" type="text" placeholder="Email ou nome de usuária">
        </input>
        <input class="login-input" type="text" placeholder="Insira sua senha">
        </input>
        <button class="login-input" type="submit">LOGIN</button>
      </form>
    </div>
    <h4>OU<h4>
    <div class="google-github-login">
      <button class="login-google" type="submit">Entrar com GOOGLE</button>
      <button class="login-github" type="submit">Entrar com GITHUB</button>
    </div>
    <div class="new-register">
      <p id="without-register">Não tem uma conta?</p>
      <a id="register" href="/register">Cadastre-se</a>
    </div>
  </div>
  `;
  return rootElement;
};