import { onNavigate } from '../../utils/history.js';
//import Login from '../pages/login/index.js';

export const Home = () => {

    const rootElement = document.createElement('div');
    // const user = await firebase.auth().currentUser

    // if(user != null){
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
      <img class="perfil" src="img/perfil.png" alt="Foto Perfil">
    </div>  
    <div class = "nameHome">    
      <h1>Priscila Souza</h1>      
    </div>
    <div class = "post">
      <input type="text" id="textPost" placeholder="O que você quer compartilhar?" autocomplete="off">  
    </div>
      <button class = "buttonPost">Publicar</button>
    <div id="postedValue"></div>
      <input type="file" id="upload">
      <img src="" width="100" id="imgProfile">
      <button class = "profilePhoto" id="profilePhoto">Carregar foto</button>`;


    const textPost = rootElement.querySelector("#textPost");
    let feed = '';
    rootElement.querySelector('.buttonPost').addEventListener("click", (event) => {
        event.preventDefault();
        let postValue = textPost.value;
        let post = {
            text: postValue
        }
        textPost.value = '';

        firebase.firestore().collection('post').add(post)
        rootElement.querySelector("#postedValue").innerHTML =
            feed +=
            `<div class="containerFeed">
                 <div class="postFeed"><p>${post.text}</p> 
                 </div>
                 <div class="containerButton">
                   <button class="likeBtn">
                  <span id="like"><img src="https://img.icons8.com/nolan/64/like.png"/></span>
                  <span id="score">0</span> Like
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

    let storage = firebase.storage();
    let profile = rootElement.querySelector('#upload')

    profile.addEventListener("change", e => {
            const file = e.target.files[0]
            const fileReader = new FileReader()


            fileReader.onloadend = () => {

                rootElement.querySelector("#imgProfile").setAttribute("src", fileReader.result)


            }
            fileReader.readAsDataURL(file)

            rootElement.querySelector("#profilePhoto").addEventListener("click", () => {

                const namePhoto = "photoUser"
                const upload = storage.ref().child("ProfilePhoto").child(namePhoto + ".pnj").put(file)

                upload.on("state_changed", function() {

                    console.log("Imagem Salva")

                }, function(error) {

                    console.log("Erro ao salvar imagem")

                })

            })


        })
        // } else {
        //     rootElement.innerHTML =
        //       <h1>Ops, faça um login!.</h1>
        // }
        // Coloque sua página

    console.log(rootElement)

    return rootElement;
}