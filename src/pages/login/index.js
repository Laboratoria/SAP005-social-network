export const Login = () => {
  const container = document.createElement('div');
  container.classList.add('div-container');
  container.innerHTML = `
  <div id='fundo'>
  </div>

  <div class="container-arrow">
    <a href="/"><input type="button" class="arrow" id="arrow"></a>
  </div>

  <form> 
    <div>
      <input type="email" id="email" placeholder="E-mail">
      <input type="password" id="password" placeholder="Senha">
    </div>
  </form>

  <button id="btn">Entrar</button>
    <p class="text"><b>Ou inscreva-se com</b></p> 

  <div class="redes">
    <input type="button" class="google" id="authGoogle">
    <input type="button" class="facebook" id="authFacebook">
    <input type="button" class="e-mail" id="authEmail">
  </div>
  `;
  return container;
};
