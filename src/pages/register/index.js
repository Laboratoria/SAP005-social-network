import { onNavigate } from '../../utils/history.js';
export const Register = () => {
    const rootElement = document.createElement('div');
    rootElement.classList.add("formRegister")
    rootElement.innerHTML = `    
    <div class="textRegister"> 
        
        <div id="finalized" class="msgFinalized">
    </div>
    <p class="textFirts">Cadastre-se.</p>
        <fieldset>
        <legend> É rápido e fácil</legend>
            <form class="register">
                <div class="name">
                    <input type="text" id="nome" placeholder="Nome" required autocomplete="off">
                    <input type="text" id="sobrenome" placeholder="Sobrenome" required autocomplete="off">
                </div>
                <div class="registerColumn">
                    <input type="email" id="email" placeholder="Email" required autocomplete="off">
                    <input id="passwordFirst" type="password" placeholder="Digite uma senha 6 digitos" required autocomplete="off">
                    <input id="passwordSecond" type="password" placeholder="Confirme sua senha" required autocomplete="off">              
                    <input type="date" id="month" placeholder="Mês" max="2006-12-31">
                    <button id="btn">Cadastrar</button>
                    <button id="loginBtn">Login</button>            
                </div>
            </form>
        </fieldset>  
    `;
    const name = rootElement.querySelector('#nome')
    const lastName = rootElement.querySelector('#sobrenome')
    const email = rootElement.querySelector('#email')
    const password = rootElement.querySelector("#passwordFirst");
    const confirmPassword = rootElement.querySelector("#passwordSecond");
    const date = rootElement.querySelector('#month')


    rootElement.querySelector('#btn').addEventListener("click", (e) => {
        e.preventDefault();
        let userName = name.value.toLowerCase();
        let lastNameUser = lastName.value.toLowerCase();
        let emailUser = email.value;
        let passwordFirst = password.value;
        let passwordSecond = confirmPassword.value;
        let dateBorned = date.value;

        if (dateBorned == "" || userName == "" || lastNameUser == "") {
            rootElement.querySelector("#finalized").innerHTML = `<h1 class = "warning">Todos os campos devem ser preenchidos.</h1>`;
        } else if (passwordFirst != passwordSecond || passwordFirst.length < 6) {
            confirmPassword.style.backgroundColor = "rgba(233, 12, 12, 0.308)";
        } else {

            firebase.auth().createUserWithEmailAndPassword(emailUser, passwordFirst)
                .then((user) => {
                    console.log("cadastrado")
                    rootElement.querySelector("#finalized").innerHTML = `<h1>Sucesso! ${userName[0].toUpperCase() + userName.slice(1)}, seu cadastro foi efetuado.</h1>`


                })
                .catch((error) => {
                    var errorCode = error.code;
                    console.log(errorCode)
                    var errorMessage = error.message;
                    console.log(errorMessage)

                });
        }
        date.value = "";
        name.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
    })
    
    rootElement.querySelector("#loginBtn").addEventListener("click", (e) => {
        e.preventDefault();
        onNavigate("/")
    })
    return rootElement;
};