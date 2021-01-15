export const Home = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <title>TPM</title>
      <br>
      <div id='logo-name' class='network-name'>
        <h1 class='tpm-name'>TPM</h1>
      
        <p id='subtitle-one'>Tudo é possível para Maes</p>
                                              <br>
          <img class="mae-carol" src="./img/mcarol.jpg" alt="Desenho de Mae Carol Jemison astronauta">      

            <button id='about'>SOBRE</button>
            <p id='about-text'> Mae Carol Jemison é uma médica, engenheira e ex-astronauta 
            estadunidense. 
            Foi a primeira mulher negra a ir para o espaço, quando serviu como especialista 
            de missão a bordo do ônibus espacial Endeavour. Jemison se uniu ao grupo de astronautas 
            da NASA de 1987 e serviu na missão STS-47, na qual orbitou a Terra dos dias 12 a 20 de 
            setembro de 1992. <br><br>

            Mae foi tudo o que ela desejou ser, e você? O que deseja? 
            Então você vai conseguir!  <br>
            Essa é uma rede destinada a você mulher que pretende confiar mais
              em si mesma para ingressar na área que você sempre sonhou!
            Aqui você pode compartilhar ideias, oportunidades, cursos e qualquer
            outra contribuição para várias outras mulheres, formando uma rede de apoio
              em um lugar seguro.
            </p>
        </div> 
      `

return rootElement;
};
