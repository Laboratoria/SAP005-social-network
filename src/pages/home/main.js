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
      <textarea type="text" id="textPost" placeholder="O que você quer compartilhar?" autocomplete="off"> </textarea> 
    </div>
      <button class = "buttonPost"><img src="https://img.icons8.com/material-outlined/24/ffffff/speech-bubble-with-dots.png"/></button>
      <div id="postedValue"></div>
    `;
    var docRef = db.collection("post").doc();
    const userId = localStorage.getItem("uid");
    db.collection('users').doc(userId).get().then((docRef) => {
        rootElement.querySelector("#imgProfile").setAttribute("src", docRef.data().image)
        rootElement.querySelector("#nameUser").innerHTML = `${ docRef.data().name }`

    });

    const postLoad = () => {

    }

    db.collection("post").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            postFeed(doc.data())
                // console.log(`${doc.id} => ${doc.data().id}`);

        });
    });

    window.addEventListener('load', () => {
        postLoad()
    });

    const textPost = rootElement.querySelector("#textPost");
    let feed = '';
    rootElement.querySelector('.buttonPost').addEventListener("click", async(event) => {
        event.preventDefault();
        let postValue = textPost.value;
        if (postValue != "") {

            let post = {
                text: postValue,
                email: firebase.auth().currentUser.email,
                like: [],

            }
            textPost.value = '';
            const userId = firebase.auth().currentUser.uid
            localStorage.setItem("uid", userId);


            db.collection("post").doc(docRef.id).set({
                ...post,
                data: (new Date()).toLocaleString(),
                id: docRef.id,

            }).then(() => {

                postFeed({

                    ...post,
                    displayName: firebase.auth().currentUser.displayName

                })

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


        rootElement.querySelector("#profilePhoto").addEventListener("click", (e) => {


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
            `<div id =${post.id} class="containerFeed">
                 <div class="postFeed">
                 <div class = "nameIcon">
                 <img src ="../img/book.png">
                    <h2 class = "namePost">${post.email}</h2> 
                    </div>
                    <textarea disabled id = ${post.text} class = "editText">${post.text}</textarea>                   
                    <div class = "editArea">              
                        <button class="save" id =${post.id}><img src="https://img.icons8.com/nolan/64/save-close.png"/></button>                       
                    </div>
                 </div>
                 <div id= "containerButton" class="containerButton" >
                 <button class="delete" id=${post.id}><img src="https://img.icons8.com/nolan/64/delete-forever.png"/></button>
                 <button class="edit" id ="edit"><img src="https://img.icons8.com/nolan/64/edit--v1.png"/></button> 
                  <button  id =${post.id} class="likeBtn" ><img src="https://img.icons8.com/nolan/64/like.png"/></button>    
                  <span id=${post.like} class ="spanLike">${post.like.length}</span>                 
                </div>
                </div>`
        const edit = rootElement.querySelectorAll("#edit")
        edit.forEach((button) => {
            button.addEventListener("click", (e) => {
                const containerFeed = e.target.parentNode.parentNode.parentNode
                e.preventDefault()
                showEdit(containerFeed)
            })

        })
        const save = rootElement.querySelectorAll(".save")
        save.forEach((button) => {
            button.addEventListener("click", async(e) => {
                const newText = rootElement.querySelector(".editText").value
                console.log(button.id)
                const containerFeed = e.target.parentNode.parentNode.parentNode
                e.preventDefault()
                const saveText = db.collection("post").doc(button.id).set({
                        text: newText,

                    }, { merge: true })
                    .then(function() {
                        showSave(containerFeed)
                        console.log("Document successfully updated!");
                    })
                    .catch(function(error) {
                        console.error("Error updating document: ", error);
                    });
            })
        })


        const likeButton = rootElement.querySelectorAll(".likeBtn")
        likeButton.forEach((button) => {
            console.log(button)
            button.addEventListener("click", async(e) => {
                e.preventDefault()
                const containerFeed = e.target.parentNode.parentNode.parentNode
                console.log(post.like)
                db.collection("post").doc(button.id).update({
                    like: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid)
                }).then(() => {

                    const text = `${post.like.length} `
                    const elementLike = containerFeed.querySelector(".spanLike")
                    elementLike.innerHTML = text

                })

            })



        })
        const deletPost = rootElement.querySelectorAll(".delete")
        deletPost.forEach((button) => {
            button.addEventListener("click", (e) => {
                const containerFeed = e.target.parentNode.parentNode.parentNode
                e.preventDefault()
                console.log(button.id)
                console.log(containerFeed)

                db.collection("post").doc(button.id).delete()
                    .then(function() {
                        containerFeed.remove()

                        console.log("Document successfully deleted!");
                    }).catch(function(error) {
                        console.error("Error removing document: ", error);
                    });

            })


        })

    };



    const showEdit = (containerFeed) => {
        containerFeed.querySelector(".editArea").style.display = "flex";
        containerFeed.querySelector(".editText").removeAttribute("disabled")
    }

    const showSave = (containerFeed) => {

        containerFeed.querySelector(".save").style.display = "none";
        containerFeed.querySelector(".editText").setAttribute("disabled", "disabled")
    }
    const like = (containerFeed) => {

        const postLike = containerFeed.querySelector("#containerButton")
        const text = containerFeed.createElement("span").innerHTML = `${post.like.length}`
        postLike.appendChild(text)

        console.log(text)
    }



    return rootElement;
}