export const Login = () => {
  // Coloque sua página

const email = "teste1@teste.com"
const password = "teste1234"
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => console.log("deu certo"))
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim")
  });

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
        <label class="label-login">E-mail</label>
        <input type="email" class="input-login" name="email-login" required>
        <label class="label-login">Senha</label>
        <input type="password" class="input-login" minlength="8" name="password-login" required>
        <button type="submit" class="btn-login">Entrar</button>
        <label class="alternative">Ou</label>
        <input type="button" value="G google" class="btn-google" name="btn-google">
        </form>
      <section>
      <p class="register-login" name="register-login">
        Ainda não tem uma conta ? <a href="#">Registrar-se</a>
      </p>
  `;
  return rootElement;
};
