export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <section class="login">
      <img class="img-logo"  src="../src/img/Logo.jpeg" alt="logo da página">
      <button id="login">Fazer login com o Google</button>
    </section>
  `;


  const loginGoogle = rootElement.querySelector("#login");

  loginGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("funciona botão")
  });
  
  return rootElement;
};