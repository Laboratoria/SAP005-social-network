
    export const logOut = function(){
         
            document.getElementById('log-out').addEventListener("click", logOut)
            function logOut() {
                firebase.auth().signOut().then(() => {

                    document.getElementById('root').innerHTML= " "
                 /*   document.getElementById('logo-name').style.display = "block"
                    document.getElementById('header-document').style.display = "flex"

                    if(window.innerWidth <= 500){
                        document.getElementById('header-document').style.display = "block"
                        document.getElementById('header-document').style.width = "100%"
                        document.getElementById('logo-name').style.width = "100%"
                    } */
                })
           }
        }
      
/* if(document.getElementById('post') !== null){
    document.getElementById('post').addEventListener("click", showPost)
     function showPost(e){
        e.preventDefault()
        const postInput = document.getElementsByClassName('resume').value
        document.getElementById('posts').innerHTML = ` 
        <div> ${postInput} </div> ` 
     }
    } else {
    console.log("Deu não")
} */