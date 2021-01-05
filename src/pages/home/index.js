import { onNavigate } from '../../utils/history.js';

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
    <label for="profile">Enviar foto</label>
    <input type="file" name="profile" id="upload">
    <img src="" width="100"  id="imgProfile">
    <button class = "profilePhoto" id="profilePhoto">Carregar foto</button>
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

  rootElement.querySelector("#exit").addEventListener("click", (e) => {
    e.preventDefault()
    firebase.auth().signOut().then(function () {
      onNavigate("/")
    }).catch(function (error) {
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

      upload.on("state_changed", function () {

        upload.snapshot.ref.getDownloadURL().then(function (url_imagem) {

          console.log("Url:" + url_imagem)

        })

      }, function (error) {

        console.log("Erro ao salvar imagem")

      })

    })


  })

  return rootElement;
}
