import { onNavigate } from '../../utils/history.js';

export const Login = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `    
<div  id = "login" class="textRegister">
<img class="logoL" src="img/learning.png" alt="Logo L"> 
    <form class="registerLogin">        
        <div class="registerColumn">
            <input type="email" id="email" placeholder="Email" required autocomplete="off">           
            <input id="passwordSecond" type="password" placeholder="Senha" required autocomplete="off">
            <button id="eye"><img src="https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png"/></button>                     
            <button id="btn">Login</button>
        </div>
    </form>
    <div class="btns">
        <button id="btnLogin">Login</button> 
        <p>ou</p>
        <button id="google"><img src="https://img.icons8.com/color/48/000000/gmail--v1.png"/> </button>
    </div>
</div>
`;
    rootElement.querySelector('#eye').addEventListener("click", (e) => {
        e.preventDefault();
        const showPassword = rootElement.querySelector("#passwordFirst");
        const showPassword2 = rootElement.querySelector("#passwordSecond");
        if (showPassword.type == "password" && showPassword2.type == "password") {
            showPassword.type = "text";
            showPassword2.type = "text";
        } else {
            showPassword.type = "password";
            showPassword2.type = "password";
        }
    })
    rootElement.querySelector("#btnCadastro").addEventListener("click", (e) => {
        e.preventDefault();
        onNavigate("/cadastro")
    })
    return rootElement;
};