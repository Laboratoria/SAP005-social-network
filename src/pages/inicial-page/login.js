import { emailLogin, googleLogin, subscribe } from '../../services/index.js';

const modal = document.getElementById('boxLogin');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onload = () => {
document.getElementById('main-page').innerHTML = `

<div class="inicial-page" id="inicial-page">
    <h2>SOCIAL NETWORK LOGIN</h2>
  </div>

  <div class= "register" id="register">
    <form action="#" method="post">
      <fieldset>
        <fieldset class="group">
          <div class="area">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" style="width: 10em" value="">
          </div>
        </fieldset>
        <div class="area">
          <label for="email">E-mail:</label>
          <input type="text" id="new-email" name="email" style="width: 20em" value="">
        </div>
        <div class="area">
          <label for="password-register">Senha:</label>
          <input type="password" id="password-register" autocomplete="off" name="password-register" style="width: 20em" value="">
        </div>
        
        <button id="subscribe" type="submit" name="submit">Enviar</button>
      </fieldset>
    </form>
  </div>
  <div>
       <input class= "config-inputs" type= "button" value= "Google"/>
  </div>//

  <section id='login-button' class="half-screen">
    <button id="login-btn">Login</button>
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



}