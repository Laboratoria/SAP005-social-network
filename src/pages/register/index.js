export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <section class="register"> 
    <section class="logo">  
        <img src="../../img/ada-lovelace.svg" width="175px" height="175px" alt="Desenho do rosto de Ada Lovelace em preto com um fundo redondo alaranjado">
        <p class="theme"><span class="logoname">[Ada]</p>
    </section>
    <section class="form">
      <div class="title_container">
        <h2>Se registre no [Ada]</h2>
      </div>
      <div class="form_container">
        <form>
            <div class="input"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
            <input type="email" name="email" placeholder="Email" required />
            </div>
            <div class="input"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="password" name="password" placeholder="Senha" required />
            </div>
            <div class="input"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="password" name="password" placeholder="Confirme sua senha" required />
            </div>
            <div class="row">
            <div class="col_half">
                <div class="input"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="Nome" />
                </div>
            </div>
            <div class="col_half">
                <div class="input"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="Sobrenome" required />
                </div>
            </div>
            </div>
            <div class="input_field checkbox_option">
                <input type="checkbox" id="cb1">
                <label for="cb1">Concordo com os termos e condições</label>
            </div>
            <div class="input_field checkbox_option">
                <input type="checkbox" id="cb2">
                <label for="cb2">Quero me inscerver na newsletter</label>
            </div>
            <input class="button" type="submit" value="Registrar" />
        </form>
      </div> 
    </section>
  </section>  
  `;
  const ingIn = rootElement.querySelector('#register');


  ingIn.addEventListener("click", e => {
    ingIn.style.background = '#FEBB86';
    
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    const auth = firebase.auth();
    //vai retornar uma promessa e dá pra trabalhar de maneira assíncrona
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log (e.message));


    auth.createUsernWithEmailAndPassword(email, password);
    auth.onAuthStateChange (firebaseUser => {});



  });

  return rootElement;
};




/* tabs
$('#form #register').click(function() {

      $('#form').fadeToggle();
        $(".form-background").animate(
              {
                "top": "-342px",
                "width": "400px",
                "height": "410px"
              },
              "slow", function(){
            $('#register-form').fadeToggle();
              });
      });

      $('#register-form #tab-login').click(function() {

        $('#register-form').fadeToggle();
        $(".form-background").animate(
              {
                "top": "-214px",
                "width": "400px",
                "height": "290px"
              },
              "slow", function(){
                  $('#login-form').fadeToggle();
              });
      });

      // Tips
      $('#register-form .email-tip-icon').hover(function(){
      $('#message-email').fadeToggle();
    });

    $('#register-form .password-tip-icon').hover(function(){
    $('#message-password').fadeToggle();
    })