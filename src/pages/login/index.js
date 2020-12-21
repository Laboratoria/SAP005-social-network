export const Login = () => {
  // Coloque sua página
  document.querySelector('.bottom-nav').style.display = 'none';
  const rootElement = document.createElement('div');
  rootElement.className = 'container';
  rootElement.innerHTML = `
      <header>
        <h2 class="title-login">Nome do app</h2>
      </header>
      <section>
        <form class="form-login">
        <label class="label-enter">Entrar</label>
        <label class="label-email">E-mail</label>
        <input type="email" class="email-login">
        <label class="label-password">Senha</label>
        <input type="password" class="password-login">
        <button type="submit" class="btn-login">Entrar</button>
        <label class="alternative">Ou</label>
        <input type="button" value="G google" class="btn-google">
        </form>
      <section>
      <p class="register-login">
        Ainda não tem uma conta ? <a href="#">Registrar-se</a>
      </p>
  `;
  return rootElement;
};
