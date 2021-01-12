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
    <div id = "nameHome" class = "nameHome"> 
        <h1 id="nameUser"></h1> 
    </div>
    <div class = "post">
      <input type="text" id="textPost" placeholder="O que você quer compartilhar?" autocomplete="off">  
    </div>
      <button class = "buttonPost"><img src="https://img.icons8.com/material-outlined/24/ffffff/speech-bubble-with-dots.png"/></button>
      <div id="postedValue"></div>
    `;
    var docRef = db.collection("post").doc();
    const userId = localStorage.getItem("uid");


    db.collection('users').doc(userId).get().then((docRef) => {
        rootElement.querySelector("#imgProfile").setAttribute("src", docRef.data().image)
        rootElement.querySelector("#nameUser").innerHTML = `${ docRef.data().name }`

        console.log(`${docRef.id}`, `${ docRef.data().name }`);


    });

    const postId = db.collection("post").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            postFeed(doc.data())
                // console.log(`${doc.id} => ${doc.data().id}`);

        });
    });

    const textPost = rootElement.querySelector("#textPost");
    let feed = '';
    rootElement.querySelector('.buttonPost').addEventListener("click", async(event) => {
        event.preventDefault();
        let postValue = textPost.value;
        if (postValue != "") {

            let post = {
                text: postValue
            }
            textPost.value = '';
            const userId = firebase.auth().currentUser.uid
            localStorage.setItem("uid", userId);
            postFeed(post)
            db.collection("post").doc().set({
                text: post.text,
                data: (new Date()).toLocaleString(),
                email: `${firebase.auth().currentUser.email}`,
                like: [],
                id: docRef.id,

            })
        } else {

        }
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
    const fileReader = new FileReader()

    profile.addEventListener("change", e => {
        const file = e.target.files[0]

        fileReader.onloadend = () => {
            rootElement.querySelector("#imgProfile").setAttribute("src", fileReader.result)
            console.log("Imagem Salva")
        }

        fileReader.readAsDataURL(file)
        console.log(fileReader)

        rootElement.querySelector("#profilePhoto").addEventListener("click", () => {
            const namePhoto = "photoUser"
            const upload = storage.ref().child("ProfilePhoto").child(namePhoto + ".pnj").put(file)
            const userId = firebase.auth().currentUser.uid
            localStorage.setItem("uid", userId);
            db.collection("users").doc(userId).set({
                image: fileReader.result,


            }, { merge: true })

        })


    })
    const postFeed = (post) => {
        rootElement.querySelector("#postedValue").innerHTML =
            feed +=
            `<div class="containerFeed">
                 <div class="postFeed"><p>${post.text}</p>
                 <div class = "editArea">                
                 <textarea id = "editText" class = "editText">${post.text}</textarea>
                 <button class="save" id ="save"><img src="https://img.icons8.com/nolan/64/save-close.png"/></button>
                 </div>
                 </div>
                 <div class="containerButton" ">
                 <button class = "delete" id = "delete"><img src="https://img.icons8.com/nolan/64/delete-forever.png"/></button>
                 <button class="edit" id = "edit"><img src="https://img.icons8.com/nolan/64/edit--v1.png"/></button> 
                  <button class="likeBtn" ><img src="https://img.icons8.com/nolan/64/like.png"/></button>                   
                  <span id="like"></span>
                  <span id="score">0</span> Like                  
                </div>
                </div>`
        rootElement.querySelector("#edit").addEventListener("click", (e) => {
            e.preventDefault()
            rootElement.querySelector("#editText").classList.remove("editText")
            rootElement.querySelector("#save").classList.remove("save")
            rootElement.querySelector("#editText").classList.add("editTextClick")
            rootElement.querySelector("#save").classList.add("saveClick")

        })
        rootElement.querySelector("#save").addEventListener("click", (e) => {
            e.preventDefault()
            rootElement.querySelector("#editText").classList.add("editText")
            rootElement.querySelector("#save").classList.add("save")
        })

    };


    return rootElement;
}