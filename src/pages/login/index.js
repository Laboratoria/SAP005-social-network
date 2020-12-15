export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <form id=>
        <h2>Acesse sua conta</h2>
        <label class="title" for="User" >Usuário</label>
        <input class="input" type="e-mail" placeholder="Informe e-mail cadastrado" required/>
        <label class="title" for="password">Senha</label>
        <input class="input" type="password" placeholder="Informe sua senha" required/>
      </form>
  `;
  return rootElement;
};
