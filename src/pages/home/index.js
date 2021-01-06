export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');

  const singupHtml = `
    <h1>Welcome!</h1>
    <button class="btn-login"> Login </button> 
    <button class="btn-singup"> SingUp </button>  

  `;
  rootElement.innerHTML = singupHtml;
  const loginButtonHtml = rootElement.querySelector('.btn-login');
  const singupButtonHtml = rootElement.querySelector('.btn-singup');

  loginButtonHtml.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.pathname = 'login';
  });

  singupButtonHtml.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.pathname = 'singup';
  });
  return rootElement;
};
