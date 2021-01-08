const modal = document.getElementById('boxLogin');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function createLogin () {
  let email = document.getElementById('new-email').value;
  let password = document.getElementById ('new-password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(user =>{
    console.log('usuário', user);
  }).cath(error => {
    console.log ('error', error);
  })
}

function loginEmail () {
  let email = document.getElementById('email').value;
  let password = document.getElementById ('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(() =>{
    console.log('Usuario logado');
  }).cath(error => {
    console.log ('error', error);
  })
}

function loginGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(resposta => {
    console.log('usuário', resposta.user);
    console.log('token', resposta.credential.accessToken);
  }).cath (erro => {
    console.log('erro', erro);
  })
}