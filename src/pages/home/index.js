export const Home = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div class = "header">     
        <img class="logoHome" src="img/learning.png" alt="Logo Learning">

        <input type="checkbox" id="check">
        <label id="icone" for="check"><img class = "menu"src="https://img.icons8.com/nolan/64/menu.png"/></label>  

      <div class="barra-menu">
        <div class = "itensMenu">
            <img src="https://img.icons8.com/wired/64/ffffff/edit.png"/>
            <button id ="edit" class = "edit"> Editar perfil</button>
            <img src="https://img.icons8.com/metro/26/ffffff/exit.png"/>
            <button id = "exit" class = "exit"> Sair</button>          
        </div>
      </div>    
    </div>  
    <div>
      <img class="perfil" src="img/perfil.png" alt="Foro Perfil">
    </div>  
    <div class = "nameHome">    
      <h1>Priscila Souza</h1>      
    </div>
    <div class = "post">
    <input type="text" id="textPost" placeholder="O que você quer compartilhar?" autocomplete="off">  
    </div>
    <button class = "buttonPost">Publicar</button>
    `;
    rootElement.classList.add("feed")
    return rootElement;
}