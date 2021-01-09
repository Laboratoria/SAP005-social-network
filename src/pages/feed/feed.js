
export const Post = function(){

document.getElementById('post-it').addEventListener('click', (e) => {
   e.preventDefault();

   let postText = document.getElementById('write-post').value

   
     firebase.firestore().collection('posts').add({
      postText,
      likes: 0,
    })
    .then(function() {
      console.log("Post enviado com sucesso!");
    })
    .catch(function() {
      console.error("Ocorreu um erro");
    });
  })
}


    export const logOut = function(){
         
            document.getElementById('log-out').addEventListener("click", logOut)
            function logOut() {
                firebase.auth().signOut().then(() => {

                  document.getElementById('root').innerHTML= " "           
                   /* 
                    if(window.innerWidth <= 500){
                        document.getElementById('header-document').style.display = "block"
                        document.getElementById('header-document').style.width = "100%"
                        document.getElementById('logo-name').style.width = "100%"
                    } */
                })
           }
        }
 