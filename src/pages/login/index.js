export const Login = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `    
<div  id = "login" class="textRegister">
<p class="textFirts">Login.</p>
<fieldset>
    <legend> Insira seus dados. </legend>
    <form class="register">        
        <div class="registerColumn">
            <input type="email" id="email" placeholder="Email" required autocomplete="off">           
            <input id="passwordSecond" type="password" placeholder="Senha" required autocomplete="off">
            <button id="eye"><img src="https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png"/></button>   
            <a href="/cadastro"  id= "link">Cadastre-se</a>         
            <button id="btn">Login</button>
        </div>
    </form>
</fieldset>
<img class="logoL" src="img/L.png" alt="Logo L">
</div>
`;
    return rootElement;
};

// export const eye = document.querySelector('#eye').addEventListener("click", (e) => {
//     e.preventDefault();
//     const showPassword = document.querySelector("#passwordFirst");
//     const showPassword2 = document.querySelector("#passwordSecond");
//     if (showPassword.type == "password" && showPassword2.type == "password") {
//         showPassword.type = "text";
//         showPassword2.type = "text";
//     } else {
//         showPassword.type = "password";
//         showPassword2.type = "password";
//     }
// })