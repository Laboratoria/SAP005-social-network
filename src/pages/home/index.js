import { onNavigate } from '../../utils/history.js';

export const Home = () => {

    const rootElement = document.createElement('div');

    rootElement.innerHTML = `
    <div class = "header">     
        <img class="logoHome" src="img/learning.png" alt="Logo Learning">

        <input type="checkbox" id="check">
        <label id="icone" for="check"><img class = "menu"src="https://img.icons8.com/nolan/64/menu.png"/></label>  

      <div class="barra-menu">
        <div class = "itensMenu">            
            <input type="file" id="upload" >  
            <label for="upload" class = "labelPhoto"><img src="https://img.icons8.com/ios-filled/50/ffffff/photo-editor.png"/></label>            
            <button class = "profilePhoto" id="profilePhoto" for = "upload"><img src="https://img.icons8.com/ios/50/ffffff/save--v1.png"/></button>    
            <button id = "exit" class = "exit"><img src="https://img.icons8.com/ios-filled/50/ffffff/logout-rounded-up.png"/></button>                              
        </div>
      </div>    
    </div>  
    <div>
    <img class="perfil" src="./img/avatar2.png" width="100" id="imgProfile" >                
    </div>  
    <div class = "nameHome">    
      <h1>Nome Usuário</h1>      
    </div>
    <div class = "post">
      <input type="text" id="textPost" placeholder="O que você quer compartilhar?" autocomplete="off">  
    </div>
      <button class = "buttonPost"><img src="https://img.icons8.com/material-outlined/24/ffffff/speech-bubble-with-dots.png"/></button>
      <div id="postedValue"></div>
    `;

    const userId = localStorage.getItem("uid");
    db.collection("post").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            postFeed(doc.data())
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });


    const textPost = rootElement.querySelector("#textPost");
    let feed = '';
    rootElement.querySelector('.buttonPost').addEventListener("click", async(event) => {
        event.preventDefault();
        let postValue = textPost.value;
        let post = {
            text: postValue
        }
        textPost.value = '';
        const userId = firebase.auth().currentUser.uid
        localStorage.setItem("uid", userId);
        postFeed(post)
        db.collection("post").add({
            text: '',
            email: `${firebase.auth().currentUser.email}`

        })
        return feed
    });


    rootElement.classList.add("feed")

    rootElement.querySelector("#exit").addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.removeItem("uid");
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
    const postFeed = (post) => {
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
        const likeBtn = document.querySelector(".likeBtn");
        let likeIcon = document.querySelector("#like"),
            score = document.querySelector("#score");
        let clicked = false;
        likeBtn.addEventListener("click", () => {
            if (!clicked) {
                clicked = true;
                likeIcon.innerHTML = `<img src="https://img.icons8.com/nolan/50/filled-like.png"/>`;
                score.textContent++;
            } else {
                clicked = false;
                likeIcon.innerHTML = `<img src="https://img.icons8.com/nolan/64/like.png"/>`;
                score.textContent--;
            }
        });

    };


    return rootElement;
}