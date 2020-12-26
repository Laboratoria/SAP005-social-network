export const Login = () => {
  // const email = 'teste1@teste.com';
  // const password = 'teste1234';
  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(() => console.log('deu certo'))
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //   });

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
        <input type="button" value="G google" id="btn-google">
        </form>
      <section>
      <p class="register-login">
        Ainda não tem uma conta ? <a href="#">Registrar-se</a>
      </p>
  `;

  return rootElement;
};
