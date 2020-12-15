export function register () {
   
    var auth = null;
    firebase.auth().createUserWithEmmailPassword(
        var email= document.getElementById("e-mail").value, var email= document.getElementById("password").value
    )

    .then(function(user){
        alert("Cadastrado com sucesso");
         auth = user;

    }); 
    .catch(function (error)) {
        alert("Falha ao Cadastar");  
    }
} 

export function (Login) {
    window.location.href = "login?"
  }
