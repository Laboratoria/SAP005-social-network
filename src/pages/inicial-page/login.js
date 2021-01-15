import { emailLogin, googleLogin, subscribe } from '../../services/index.js';

window.onload = () => {
document.getElementById('main-page').innerHTML = `

<div class="inicial-page" id="inicial-page">
    <h2>Ainda não tem uma conta? <br> Venha participar!</h2>
  </div>

  <div class= "register" id="register">
    <form action="#" method="post">
      <fieldset class='subscribe-box'>
        <fieldset class="group">
          <div class="area">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" style="width: 20em" value="">
          </div>
        </fieldset>
        <div class="area">
          <label for="email">E-mail:</label>
          <input type="text" id="new-email" name="email" style="width: 20em" value="">
        </div>
        <div class="area">
          <label for="password-register">Senha:</label>
          <input type="password" id="password-register" placeholder="mínimo de 6 caracteres" autocomplete="off" name="password-register" style="width: 20em" value="">
        </div>
        
        <button id="subscribe" type="submit" name="submit">Cadastrar</button>
      </fieldset>
    </form>
  </div>

  <button id="login-btn">Login</button> <button id="google-login"><img class='logo-google'src="./img/google-icon.png">Continuar com o Google</button>

  <section id='login-button' class="half-screen">
    <div id="box-login" class="modal">

      <form class="modal-content animate" action="" method="post">
        <div class="imgcontainer">
          <span onclick="document.getElementById('box-login').style.display='none'" class="close"
            title="Close Modal">&times;</span>
          <img src="./img/mcarol.jpg" alt="icone" class="icone">
        </div>

        <div class="container">
          <label for="E-mail"><b>E-mail</b></label>
          <input id="email" type="text" placeholder="Ex.: maeterrinha@gmail.com" name="email" required>

          <label for="psw"><b>Password</b></label>
          <input id="password" type="password" placeholder="Ex.: 1234" autocomplete="off" name="psw" required>

          <button id="feed-in" type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>

        <div class="container" style="background-color:#f1f1f1">
          <button type="button" onclick="document.getElementById('box-login').style.display='none'"
            class="cancelbtn">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  </section>
  `
const modalBox = document.getElementById('boxLogin');
  window.onclick = function(event) {
    if (event.target == modal) {
     modalBox.style.display = "none";
    }
 }

  document.getElementById('subscribe').addEventListener("click", (e) => {
    e.preventDefault();
   let email = document.getElementById('new-email').value;
   let password = document.getElementById('password-register').value;
   let userName = document.getElementById('name').value;
    subscribe(email, password, userName);
    })
    const modal = document.getElementById('box-login') ;
    const goFeed = document.getElementById('feed-in');

    document.getElementById('login-btn').addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display= 'block';
      modal.style.width = 'auto';

      goFeed.addEventListener("click", (e) => {
      e.preventDefault();
      let email = document.getElementById('email').value;
      let password = document.getElementById ('password').value;
      emailLogin(email, password);
      })
    })

    document.getElementById('google-login').addEventListener('click', (e) => {
      e.preventDefault();
      googleLogin();
    })
}

   