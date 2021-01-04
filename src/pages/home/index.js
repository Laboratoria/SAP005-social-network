import { onNavigate } from '../../utils/history.js';
//import Login from '../pages/login/index.js';

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
    <div id="postedValue"></div>
    `;


    const textPost = rootElement.querySelector("#textPost");
    let feed = ''; 
    rootElement.querySelector('.buttonPost').addEventListener("click", (event)=> {
      event.preventDefault();
      // const email = Login.email;
      // console.log(email)
      let postValue = textPost.value;
      let post = {
          //email
          text: postValue 
      }
      textPost.value = '';
      firebase.firestore().collection('post').add(post)
      
     rootElement.querySelector("#postedValue").innerHTML = 
     feed += 
      `<div class="containerFeed">
        <div class="postFeed"><p>${post.text}   </p> 
        </div>
        <div class="containerButton">
            <button class="like"><img src="https://img.icons8.com/nolan/64/like.png"/></button>
        </div>
      </div>`
      return feed
    });
    

  


    rootElement.classList.add("feed")

    rootElement.querySelector("#exit").addEventListener("click", (e) => {
        e.preventDefault()
        firebase.auth().signOut().then(function() {
            onNavigate("/")
        }).catch(function(error) {
            // An error happened.
        });
    })
    return rootElement;
}