

export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class=" containerLogin">
  <form class="formLogin"  >
  <input placeholder="Email" ></input>
  <input placeholder="Senha" ></input>
  <button type="submit" >entrar</button>
  <button>cadastre-se</button>
  </form>
  </div>
  `;
  return rootElement;
};
