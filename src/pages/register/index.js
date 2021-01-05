export const Register = () => {
  const container = document.createElement('div');
  container.classList.add('div-register');
  container.innerHTML = `
  <div class="container-logo">
    <img class="logo" alt="Logo Runners">
  </div>

  <form> 
    <div class="form-container">
    <h1>Cadastro</h1>
      <input type="text" id="name" placeholder="Nome"/>
      <input type="email" id="email" placeholder="E-mail"/>
      <input type="date" id="date" placeholder="dd/mm/aaa"/>
      <input type="text" id="city" placeholder="Cidade"/>
      <input type="password" id="password" placeholder="Senha"/>
      <input type="password" id="confirmPwd" placeholder="Confirmar Senha"/>
    </div>
  </form>

  <button id="btnRegister">Registrar</button>
  <a href="./src/home/index.js"><b>Voltar</b></a> 
  `;

  const btnRegister = container.querySelector('#btnRegister');
  const pwd = container.querySelector('#password');
  const confirmPwd = container.querySelector('#confirmPwd');

  return container;
};
