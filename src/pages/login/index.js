export const Login = () => {
  const container = document.createElement('div');
  container.classList.add('div-container');
  container.innerHTML = `
  <div id='fundo'>
  </div>

  <div class="container-arrow">
    <a href="/"><input type="button" class="arrow" id="arrow"></a>
  </div>

  <form> 
    <div>
      <input type="email" id="email" placeholder="E-mail">
      <input type="password" id="password" placeholder="Senha">
    </div>
  </form>

  <button id="btn">Entrar</button>
    <p class="text"><b>Ou inscreva-se com</b></p> 

  <div class="social">
    <input type="button" class="google" id="authGoogle">
    <input type="button" class="facebook" id="authFacebook">
    <input type="button" class="e-mail" id="authEmail">
  </div>
  `;

  const btnButton = document.getElementById("btn");
  const autEmail = document.getElementById("authEmail");
  const autGoogle = document.getElementById("authGoogle");
  const autFacebook = document.getElementById("authFacebook");

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Criar Usuario
  const btnAuth = () => {
    btnButton.addEventListener('click', () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          alert('Cadastro realizado');
        })
        .catch((error) => {
          console.error(error.code);
          console.error(error.message);
          alert('Falha ao cadastrar');
        });
    });
  };

  // Autenticação email e senha
  const emailAndPwdAuth = () => {
    autEmail.addEventListener('click', () => {
      firebase
        .auth()
        .singInWithEmailAndPassword(email.value, password.value)
        .then((result) => {
          console.log(result);
          alert('E-mail autenticado' + email.value);
        })
        .catch((error) => {
          console.error(error.code);
          console.error(error.message);
          alert('Falha na autenticação!');
        });
    });
  };

  // Autenticação com o Google
  const googleAuth = () => {
    autGoogle.addEventListener('click', () => {
      const provider = new firebase.auth.authGoogleProvider();
      signIn(provider);
    });
  };

  function signIn(provider) {
    // firebase
    // .auth()
    // .singInWithPoup(provider)
    // .then((result)=> {
    //     console.log(result);
    //     let token = result.credential.accessToken;
    // })
    // .catch((error)=> {
    //     console.log(error);
    //     alert("Falha na autenticação");
    // });
  }
  return container;
};
