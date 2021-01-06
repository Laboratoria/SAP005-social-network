import {onNavigate} from "../../utils/history.js"
export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <div class="slider">
        <figure>
          <img src="images/slidebg1.jpg">
          <img src="images/slidebg2.jpg">
          <img src="images/slidebg3.jpg">
        </figure>
        <button id="login" class="buttonPage">Entrar</button>
        <div class="banner">
          <img src="images/olimpo.png" >
          <p> <b><span class="colorText">Siga</span></b> o que for de seu interrese</p>
          <p> <b><span class="colorText">Compartilhe</span></b> seu treino</p>
          <p> <b><span class="colorText">Participe</span></b> de conversas</p>
        </div>
      </div>

      <a href="#about"><figure><img src="images/seta.png" class="icon arrow"></figure></a>

      <div class="container">
        <p id="about"> Olimpo é um aplicativo direcionado a pessoas que praticam esporte, tem como objetivo ser um espaço para troca de informações, novas amizades e compartilhamento de dicas. 
         Faça parte, encontre amigos que amam praticar esportes.
         <br>
         Esse projeto foi desenvolvido por: 
        </p>
        <div class="social-media dysplay-template">
          <a href="https://github.com/giomadeira" target="_blank" class="colorText">Giovana<img src="images/github.png" class="icon dysplay-template"></a>
          <a href="https://github.com/JulianaAmoriN" target="_blank" class="colorText">Juliana<img src="images/github.png" class="icon dysplay-template"></a>
          <a href="https://github.com/Costahadassa" target="_blank" class="colorText">Hadassa<img src="images/github.png" class="icon dysplay-template"></a>
        </div>
      </div>
      `;

  const bottunLogin = rootElement.querySelector("#login")
  bottunLogin.addEventListener("click", () => {
    onNavigate("/login")
  })
  return rootElement;
};