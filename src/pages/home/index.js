import { onNavigate} from "../../utils/history.js"
export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <div class="slider">
        <figure>
          <img src="images/slidebg1.jpg">
          <img src="images/slidebg2.jpg">
          <img src="images/slidebg3.jpg">
        </figure>
        <div>
          <button id="entrar">Entrar</button>
        </div>
        <div class="banner">
          <img src="images/olimpo.png" >
          <p> <b>Siga</b> o que for de seu interrese</p>
          <p> <b>Compartilhe</b> seu treino</p>
          <p> <b>Participe</b> de conversas</p>
        </div>
      </div>

      <a href="#about-app"><img src="images/seta.png" class="icon arrow"></a>

      <div class="container">
        <p id="about-app"> Olimpo é um aplicativo direcionado a pessoas que praticam esporte, tem como objetivo ser um espaço para troca de informações, novas amizades e compartilhamento de dicas. 
         Faça parte, encontre amigos que amam praticar esportes.
         <br>
         Esse projeto foi desenvolvido por: 
        </p>
        <div class="social-media dysplay-template">
          <a href="https://github.com/giomadeira" target="_blank">Giovana<img src="images/github.png" class="icon dysplay-template"></a>
          <a href="https://github.com/JulianaAmoriN" target="_blank">Juliana<img src="images/github.png" class="icon dysplay-template"></a>
          <a href="https://github.com/Costahadassa" target="_blank">Hadassa<img src="images/github.png" class="icon dysplay-template"></a>
        </div>
      </div>
      `;

      const bottunLogin = rootElement.querySelector("#entrar")
    bottunLogin.addEventListener("click",()=>{
      onNavigate("/login")
    })
  return rootElement;
};