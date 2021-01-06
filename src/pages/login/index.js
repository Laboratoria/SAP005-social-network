export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="main-login">
    <div class="login-images">
      <img class="logo" src="/images/logo-deva.png"/>
      <img class="image-desktop" src="/images/image-desktop.png"/>
    </div>
    <div class="login-data">
      <div class="mail-login">
        <form class="login-input">
          <input class="login-input" id="email-login" type="text" placeholder="Email ou nome de usuária">
          </input>
          <input class="login-input" id="password-login" type="password" placeholder="Insira sua senha">
          </input>
          <button class="login-input" id="lgn-btn" type="submit">LOGIN</button>
        </form>
      </div>
      <h4>OU</h4>
      <div class="google-github-login">
        <button class="login-google" type="submit">Entrar com GOOGLE</button>
        <button class="login-github" type="submit">Entrar com GITHUB</button>
      </div>
      <div class="new-register">
        <p class="without-register">Não tem uma conta?</p>
        <a class="register" href="/register">Cadastre-se</a>
      </div>
      <div class="agreement">
        <p class="without-register">ao cadastrar-se você concorda com nosso</p>
        <a class="register" id="sgnUp-btn" href="#">código de conduta</a>
      </div>
    </div>
  </div>
  `;

const email = rootElement.querySelector("#email-login");
const  password = rootElement.querySelector("#password-login");
const loginButton = rootElement.querySelector("#lgn-btn");
const signUpButton = rootElement.querySelector("#sgnUp-btn");

function clear () {
  email.value = "";
  password.value = ""; 
};

loginButton.addEventListener("click", (e) =>{
  e.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .catch((error) => {
    var errorMessage = error.message;
    if (errorMessage == "The email address is badly formatted.") {
      alert("Email incorreto")} 
    else {
      alert("Senha incorreta")
    }
  });
  clear();
});

signUpButton.addEventListener("click", (e)=>{
  e.preventDefault();
  rootElement.innerHTML = "";
  
  // firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });
  // clear();
});

//const logoutButton = rootElement.querySelector("#sgnOutBtn")
//logoutButton.addEventListener("click", (e)=>{
//  e.preventDefault();
//  firebase.auth().signOut();
//});

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
.then(function() {
  return firebase.auth().signInWithEmailAndPassword(email.value, password.value);
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

  return rootElement;
};
