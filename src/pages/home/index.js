export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  const homeContainer = `
  <header>
  <figure class="img-wrapper">
    <img src="images/background.jpg">
  </figure>
  <div class="banner">
    <h1 class="logo">Coletivo</h1>
    <p class="content">Consideramos justas toda forma de amor.</p>
    <button class="caller" id="callerBtn">Entrar</button>
  </div>
  <footer class="footer-content">
    <h2>Coletivo © 2020.</h2>
    <div class="page-devs">
        <a href="https://github.com/CamilaKikuchi" target="_blank"><img src="images/githublogo.png"alt="github"></a>
        <a href="https://github.com/karina1602" target="_blank"><img src="images/githublogo.png"alt="github"></a>
        <a href="https://github.com/carinarocha" target="_blank"><img src="images/githublogo.png"alt="github"></a>
    </div>
  </footer>
  <header>
  `;
  rootElement.innerHTML = homeContainer;

  const loginStart = rootElement.querySelector("#callerBtn");
  loginStart.addEventListener("click", (e) =>{
    window.location.href = "/login"; 
  })
  return rootElement;
};



