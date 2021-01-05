console.log('oieeeeeeeee')
document.getElementById('create-account').addEventListener("click", dataSave)

   function dataSave(e) {
         e.preventDefault()
         let email = document.getElementById('new-email').value;
         let password = document.getElementById('new-password').value;

         if(email == null || email == ""){
            document.getElementById('alert').innerHTML = 'O campo de email precisa ser preenchido'
        } else if(password == null || password == ""){
            document.getElementById('alert').innerHTML = 'O campo de senha precisa ser preenchido'
        } else {

         firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
         console.log('usuário', user) })
        /* onNavigate('/feed')
         document.getElementById('header-document').style.display = "none"
         document.getElementById('root').style.width = "100%" */
         }
        }
       