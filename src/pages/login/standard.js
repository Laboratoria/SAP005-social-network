export const loginTags = () => {
  const template = `
  <div class="main-login">
    <div class="login-images">
      <img class="logo" src="/images/logo-deva.png"/>
      <img class="image-desktop" src="/images/image-desktop.png"/>
    </div>
    <div class="login-data">
      <div class="mail-login">
        <form class="login-input">
          <input class="login-input" id="email-login" type="text" placeholder="Email ou nome de usuária">
          </input>
<<<<<<< HEAD
          <input class="login-input" id="password-login" type="password" placeholder="Insira sua senha">
          </input>
          <button class="login-input" id="lgn-btn" type="submit">LOGIN</button>
          
=======
          <input class="login-input" id="password-login" type="text" placeholder="Insira sua senha">
          </input>
          <button class="login-input" id="lgn-btn" type="submit">LOGIN</button>
>>>>>>> 263316b718d572e74e080f14d4f24faa29724eb6
        </form>
      </div>
      <h4>OU</h4>
      <div class="google-github-login">
        <button class="login-google" type="submit">Entrar com GOOGLE</button>
        <button class="login-github" type="submit">Entrar com GITHUB</button>
      </div>
      <div class="new-register">
        <p class="without-register">Não tem uma conta?</p>
        <a class="register" href="/register">Cadastre-se</a>
      </div>
      <div class="agreement">
        <p class="without-register">ao cadastrar-se você concorda com nosso</p>
        <a class="register" id="sgnUp-btn" href="#">código de conduta</a>
      </div>
    </div>
  </div>
  `;
  return template;
};
