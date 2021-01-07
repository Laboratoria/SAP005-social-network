import { onNavigate } from '../../utils/history.js';

export const Login = () => {
    const rootElement = document.createElement('div');
    rootElement.classList.add("formRegister")
    rootElement.innerHTML = `   
    <div  id = "login" class="textRegister">
        <div id = "notFound" class="msgNotFound">
    </div>
    <form class="registerLogin">        
        <div class="registerColumn">
            <input type="email" id="email" placeholder="Email" required autocomplete="off">           
            <input id="passwordSecond" type="password" placeholder="Senha" required autocomplete="off">                     
            <button id="btnLogin">Login</button> 
        </div>
    </form>
    <div class="btns">
        <p>Não tem uma conta?<button id="btnCadastro">Cadastre-se</button></p>
        <p>OU</p>
        <p>Conecte-se com o Google</p>
        <button id="google"><img src="<img src="img/google.png"></button>
    </div>
    </div>
`;

    rootElement.querySelector("#btnCadastro").addEventListener("click", (e) => {
        e.preventDefault();
        onNavigate("/register")
    })

    let emailInput = rootElement.querySelector("#email")
    let passwordInput = rootElement.querySelector("#passwordSecond")

    rootElement.querySelector("#btnLogin").addEventListener("click", (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                onNavigate("/timeline")//onNavigate("/home")

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

    rootElement.querySelector("#google").addEventListener("click", (e) => {
        e.preventDefault()
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            onNavigate("/timeline")//onNavigate("/home")
        }).catch(function(error) {


        });

    });
    return rootElement;
};