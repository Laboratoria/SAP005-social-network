import { onNavigate } from '../../utils/history.js';

export const Login = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `    
<div  id = "login" class="textRegister">
<img class="logoL" src="img/learning.png" alt="Logo L"> 
<div id = "notFound" class = "msgNotFound">
  </div>
    <form class="registerLogin">        
        <div class="registerColumn">
            <input type="email" id="email" placeholder="Email" required autocomplete="off">           
            <input id="passwordSecond" type="password" placeholder="Senha" required autocomplete="off">
            <button id="eye"><img src="https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png"/></button>                     

            <button id="btnLogin">Login</button> 
        </div>
    </form>
    <div class="btns">
        
        <p>Não tem conta?<button id="btnCadastro">Cadastre-se</button></p>
        <p>OU</p>
        <p>Conecte-se com o Google</p>
        <button id="google"><img src="img/google.png"> </button>
    </div>
</div>
`;

    rootElement.querySelector('#eye').addEventListener("click", (e) => {
        e.preventDefault();
        const showPassword = rootElement.querySelector("#passwordSecond");
        if (showPassword.type == "password") {
            showPassword.type = "text";
        } else {
            showPassword.type = "password";
        }
    })
    rootElement.querySelector("#btnCadastro").addEventListener("click", (e) => {
        e.preventDefault();
        onNavigate("/cadastro")
    })
    let emailInput = rootElement.querySelector("#email")
    let passwordInput = rootElement.querySelector("#passwordSecond")

    rootElement.querySelector("#btnLogin").addEventListener("click", (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                rootElement.querySelector("#notFound").innerHTML = `
                <h1>Ops, não encontramos essa conta.</h1>`

            });
        emailInput.value = ""
        passwordInput.value = ""
    })

    return rootElement;


};