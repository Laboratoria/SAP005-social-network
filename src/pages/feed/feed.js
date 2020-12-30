
export const out = function (){
    document.getElementById('logout').addEventListener("click", logOut)
    function logOut() {
        firebase.auth().signOut().then(() => {

         document.getElementById('root').style.display = "none"
         document.getElementById('logo-name').style.display = "block"

         if(window.innerWidth <= 500){
            document.getElementById('header-document').style.display = "block"
            document.getElementById('header-document').style.width = "100%"
            document.getElementById('logo-name').style.width = "100%"
        } else {
            document.getElementById('header-document').style.display = "flex"
        }
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