export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1 class='introduction'>TPM <br> </h1>

      <p>Essa é uma rede destinada a você mulher que pretende confiar mais
      em si mesma para ingressar na área que você sempre sonhou!  <br><br>
      
      Aqui você pode compartilhar ideias, oportunidades, cursos e qualquer
      outra contribuição para várias outras mulheres, formando uma rede de apoio
      em um lugar seguro.  <br><br>

      Afinal tudo é possível para Maes!  <br> </p>

      <img class="mae-carol" src="/src/img/mcarol.jpg" alt="">

     <p> Mae Carol Jemison é uma médica, engenheira e ex-astronauta estadunidense. 
      Foi a primeira mulher negra a ir para o espaço, quando serviu como especialista 
      de missão a bordo do ônibus espacial Endeavour. Jemison se uniu ao grupo de astronautas 
      da NASA de 1987 e serviu na missão STS-47, na qual orbitou a Terra dos dias 12 a 20 de setembro de 1992. <br><br>

      Mae foi tudo o que ela desejou ser, e você? O que deseja? 
      Então você vai conseguir!
    </p>  
  `;
  return rootElement;
};
