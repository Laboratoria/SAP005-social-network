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
                onNavigate("/home")

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

            onNavigate("/home")
        }).catch(function(error) {

               
        });

    });
    return rootElement;
};

/*export const Login = () => {
    // Coloque sua página
        const rootElement = document.createElement("main");
        const loginContainer = `
        <section class="box-login">
            <figure class="box-img">
                <img src="images/arco-iris.png"></img>
            </figure>
            <h2 class="box-title">Bem-vinde ao Coletivo</h2>
            <p class="box-subtitle">Ao clicar Entrar, você aceita e concorda com os nossas diretrizes.<p>
            <div class="box-items">
                <ul>
                <li></li>
                <li></li>
                <li></li>
                </ul>
            </div>
            <button id="goToTimeline">Ingressar</button>
        </section>
        `;
        rootElement.innerHTML = loginContainer;
        const redirectTimeLine = rootElement.querySelector("#goToTimeline");
        redirectTimeLine.addEventListener("click", (e) =>{
            //refatorar esse metodo. Está fazendo recarregamento da page.
            window.location.href= "/timeline"; 
        })
        return rootElement;
    };*/