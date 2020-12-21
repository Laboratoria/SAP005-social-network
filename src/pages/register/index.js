export const Register = () => {

  const rootElement = document.createElement('div');

  const templateRegister = `
  <section class="section-register">
  <header class="header-register">
    <i id="login" class="icon-arrow fas fa-chevron-left"></i>
    <h1 class="register-title">Vamos começar!</h1><br>
  </header>
  <form>
    <div>
      <label class="register-label" for="username">Nome:</label>
      <input class="register-input" id="username" type="text" name="username" placeholder="Insira seu nome" required>
    </div>
    <div>
      <label class="register-label" for="email">E-mail:</label>
      <input class="register-input" id="email" type="email" name="email" placeholder="Insira seu email" required>
    </div>
    <div>
      <label class="register-label" for"password">Senha:</label>
      <input class="register-input" id="password" type="password" name="password" 
      placeholder="Digite uma senha, mínimo de 8 caracteres" minlength="8" required>
    </div>
    <div>
      <label class="register-label" for="confirm-password">Confirmar senha:</label>
      <input class="register-input" id="confirm-password" type="password" name="confirm-password" 
      placeholder="Digite novamente sua senha" minlength="8" required>
    </div>
    <div class="register-btn">
      <button class="register-submit-btn" id="btn-submit" type="submit">Registrar-se</button>
    </div>
  </form>   
  <footer class="register-footer">
    <p>Já tem uma conta? Entrar</p>
   </footer>
   </section>
  `;
  rootElement.innerHTML = templateRegister
  return rootElement;
};