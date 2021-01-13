import {
    loadUserProfile,
    loadPosts,
    createPost,
    logout,
    uploadPhoto,
    updatePost,
    likePost,
    deletePost
} from '../../services/index.js'

export const Home = () => {
    const rootElement = document.createElement('div');
    const userId = localStorage.getItem("uid");
    const fileReader = new FileReader()
    let feed = ''

    rootElement.innerHTML = `
    <div class = "header">     
        <img class="logoHome" src="img/learning.png" alt="Logo Learning">
        <input type="checkbox" id="check">
        <label id="icone" for="check"><img class = "menu"src="https://img.icons8.com/nolan/64/menu.png"/></label>  
      <div class="barra-menu">
        <div class = "itensMenu">            
            <input type="file" id="upload" >  
            <label for="upload" class = "labelPhoto"><img src="https://img.icons8.com/ios-filled/50/ffffff/photo-editor.png"/></label>               
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
      <textarea type="text" id="textPost" placeholder="O que você quer compartilhar?" autocomplete="off"></textarea> 
    </div>
      <button class = "buttonPost"><img src="https://img.icons8.com/material-outlined/24/ffffff/speech-bubble-with-dots.png"/></button>
      <div id="postedValue"></div>
    `;

    rootElement.classList.add("feed")
    const profile = rootElement.querySelector('#upload')

    let docRef = db.collection("post").doc();

    loadUserProfile(userId).then((resolve) => {
        rootElement.querySelector("#imgProfile").setAttribute("src", resolve.data().image)
        rootElement.querySelector("#nameUser").innerHTML = `${ resolve.data().name }`
    })

    loadPosts().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            postFeed(doc.data())
        });
    })

    rootElement.querySelector('.buttonPost').addEventListener("click", async(event) => {
        event.preventDefault();
        let postValue = rootElement.querySelector("#textPost");
        if (!postValue.value) {
            return feed
        } else {
            let newPost = {
                text: postValue.value,
                email: firebase.auth().currentUser.email,
                like: [],
            }

            createPost(newPost, docRef.id).then(() => {
                postFeed({
                    ...newPost,
                    displayName: firebase.auth().currentUser.displayName
                })
            })
            postValue.value = '';
            return feed
        }
    });


    rootElement.querySelector("#exit").addEventListener("click", (e) => {
        e.preventDefault()
        logout()
    })

    profile.addEventListener("change", e => {
        const file = e.target.files[0]

        fileReader.onloadend = () => {
            rootElement.querySelector("#imgProfile").setAttribute("src", fileReader.result)
            uploadPhoto(userId, fileReader.result)
        }

        fileReader.readAsDataURL(file)
    })

    const postFeed = (post) => {
        const emailUser = firebase.auth().currentUser.email
        const postEmail = post.email
        console.log(emailUser + " email do usuário logado")
        console.log(postEmail + " email do poste")

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
                 <button class="edit" id =${post.id}><img src="https://img.icons8.com/nolan/64/edit--v1.png"/></button> 
                  <button  id =${post.id} class="likeBtn" ><img src="https://img.icons8.com/nolan/64/like.png"/></button>    
                  <span id=${post.id} class ="spanLike">${post.like.length}</span>Like               
                </div>
                </div>`

        const edit = rootElement.querySelectorAll(".edit")
        edit.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault()
                const containerFeed = e.target.parentNode.parentNode.parentNode
                console.log(emailUser)
                console.log(postEmail)
                if (emailUser === postEmail) {
                    showEdit(containerFeed)
                } else {

                }

            })
        })

        const save = rootElement.querySelectorAll(".save")
        save.forEach((button) => {
            button.addEventListener("click", async(e) => {
                e.preventDefault()
                const newText = rootElement.querySelector(".editText").value
                const containerFeed = e.target.parentNode.parentNode.parentNode

                updatePost(newText, button.id).then(() => {
                    showSave(containerFeed)
                })
            })
        })

        const likeButton = rootElement.querySelectorAll(".likeBtn")
        likeButton.forEach((button) => {
            button.addEventListener("click", async(e) => {
                e.preventDefault()
                const containerFeed = e.target.parentNode.parentNode.parentNode
                likePost(userId, button.id).then(() => {
                    let postId = `#${button.id}`
                    const elementLike = containerFeed.querySelector(postId)
                    return elementLike.innerHTML = `${post.like.length + 1}`
                })
            })
        })

        const delPost = rootElement.querySelectorAll(".delete")
        delPost.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault()
                const containerFeed = e.target.parentNode.parentNode.parentNode
                deletePost(button.id).then(() => {
                    containerFeed.remove()
                })
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
        // const like = (containerFeed) => {
        //     const postLike = containerFeed.querySelector("#containerButton")
        //     const text = containerFeed.createElement("span").innerHTML = `${post.like.length}`
        //     postLike.appendChild(text)

    //     console.log(text)
    // }
    return rootElement;
}