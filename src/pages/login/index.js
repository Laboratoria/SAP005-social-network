/* eslint-disable indent */
import { onNavigate } from '../../utils/history.js';
import { login, loginGoogle } from '../../services/index.js'


export const Login = () => {
    const rootElement = document.createElement('div');
    rootElement.classList.add('formRegister');
    rootElement.innerHTML = `   
<div  id = "login" class="textRegister">
<img class="logoL" src="img/learning.png" alt="Logo L"> 
    <div id = "notFound" class="msgNotFound">
    </div>
    <div class = "formBtn">
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
</div>
`;
    let emailInput = rootElement.querySelector("#email")
    let passwordInput = rootElement.querySelector("#passwordSecond")

    rootElement.querySelector('#eye').addEventListener('click', (e) => {
        e.preventDefault();
        return eye()
    })

    rootElement.querySelector("#btnCadastro").addEventListener("click", (e) => {
        e.preventDefault();
        onNavigate("/cadastro")
    })

    rootElement.querySelector("#btnLogin").addEventListener("click", async(e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        login(email, password).then(() => {
            onNavigate('/home')
        })
        emailInput.value = ""
        passwordInput.value = '';
    });

    rootElement.querySelector("#google").addEventListener("click", (e) => {
        e.preventDefault()
        loginGoogle()
    })

    const eye = () => {
        const showPassword = rootElement.querySelector('#passwordSecond');
        if (showPassword.type == 'password') {
            showPassword.type = 'text';
        } else {
            showPassword.type = 'password';
        }
    }
    return rootElement;
};