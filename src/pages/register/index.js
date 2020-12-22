import { onNavigate } from '../../utils/history.js';

export const Register = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `    
  <div class="textRegister"> 
  <img class="logoL" src="img/learning.png" alt="Logo L"> 
  <p class="textFirts">Cadastre-se.</p>
  <fieldset>
      <legend> É rápido e fácil </legend>
      <form class="register">
          <div class="name">
              <input type="text" id="nome" placeholder="Nome" required autocomplete="off">
              <input type="text" id="sobrenome" placeholder="Sobrenome" required autocomplete="off">
          </div>
          <div class="registerColumn">
              <input type="email" id="email" placeholder="Email" required autocomplete="off">
              <input id="passwordFirst" type="password" placeholder="Digite sua senha" required autocomplete="off">
              <input id="passwordSecond" type="password" placeholder="Confirme sua senha" required autocomplete="off">
              <button id="eye"><img src="https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png"/></button>
              <input type="text" id="cpf" maxlength="11" pattern="[0-9]{11}" placeholder="CPF (Somente números)" autocomplete="off">
              <input type="date" id="month" placeholder="Mês" max="2006-12-31">
              <button id="btn">Cadastrar</button>
              <button id="loginBtn">Login</button>            
          </div>
      </form>
  </fieldset>

  
</div>
  `;
    const name = rootElement.querySelector('#nome')
    const lastName = rootElement.querySelector('#sobrenome')
    const email = rootElement.querySelector('#email')
    const password = rootElement.querySelector("#passwordFirst");
    const confirmPassword = rootElement.querySelector("#passwordSecond");
    const cpf = rootElement.querySelector('#cpf')
    const date = rootElement.querySelector('#month')



    rootElement.querySelector('#btn').addEventListener("click", (e) => {
        console.log("oi")
        e.preventDefault();
        let userName = name.value;
        let lastNameUser = lastName.value;
        let completName = userName[0].toUpperCase() + userName.slice(1) + " " + lastNameUser[0].toUpperCase() + lastNameUser.slice(1)
        let emailUser = email.value;
        let passwordFirst = password.value;
        let passwordSecond = confirmPassword.value;
        let dateBorned = date.value;
        let typedCpf = cpf.value;

        if (typedCpf == "" || typedCpf.length < 11 || dateBorned == "" || userName == "" || lastNameUser == "") {
            alert('teste');
        } else if (passwordFirst != passwordSecond) {
            confirmPassword.style.backgroundColor = "rgba(233, 12, 12, 0.308)";
        } else {
            let replaceCpf = typedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
                (regex, argument1, argument2, argument3, argument4) => {
                    return argument1 + '.' + argument2 + '.' + argument3 + '-' + argument4;
                })
            console.log(typedCpf = replaceCpf, dateBorned, passwordFirst, completName, emailUser);
        }

        cpf.value = "";
        date.value = "";
        name.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";

    })

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

    rootElement.querySelector("#loginBtn").addEventListener("click", (e) => {
        e.preventDefault();
        onNavigate("/")
    })
    return rootElement;
};