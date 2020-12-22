export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <img>
      <h1>Sobre</h1>
      <h1>Entrar</h1>

      <div>
         <figure>
            <img>
            <img>
            <img>
        </figure>
        <p></p>
      </div>

      <div>
         <figure>
           <img>
         </figure>
         <p>
         Olimpo é um aplicativo direcionado a pessoas que praticam esporte, tem como objetivo ser um espaço para troca de informações, novas amizades e compartilhamento dicas. 
         Faça parte, encontre amigos que assim como você amam praticar esportes.
         <br>
         Esse projeto foi desenvolvido por: 
         </p>
         <figure>
            <P><img>Giovana</P>
            <P><img>Juliana</P>
            <P><img>Hadassa</P>
        </figure>
      </div>
      `;
  return rootElement;
};