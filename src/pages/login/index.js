export const login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <section class="login">
      <img class="img-logo"  src="../img/Logo.jpeg" alt="logo da página">
      <button id="btnGoogle">Fazer login com o Google</button>
    </section>
  `;


  const loginGoogle = rootElement.querySelector("#btnGoogle");

  loginGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("funciona botão");
  });

  return rootElement;
};