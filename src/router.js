const cpf = document.querySelector('#cpf')
const date = document.querySelector('#month')
const btn = document.querySelector('#btn')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let dateBorned = date.value;
    let typedCpf = cpf.value;
    if (typedCpf == "" || typedCpf.length < 11 || dateBorned == "") {
        alert('teste')
    } else {
        let replaceCpf = typedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            (regex, argument1, argument2, argument3, argument4) => {
                return argument1 + '.' + argument2 + '.' + argument3 + '-' + argument4;
            })
        console.log(typedCpf = replaceCpf, dateBorned);
    }

    cpf.value = "";
    date.value = "";
})
const senha = document.querySelector("#senha");
const confirmeSenha = document.querySelector("#confirmeSenha");
const mensagemAlerta = document.querySelector(".mensagemAlerta");
const verBtn = document.querySelector(".ver");
const botao = document.querySelector("button");


botao.onclick = function() {
    if (senha.value != confirmeSenha.value) {
        mensagemAlerta.style.display = "block";
        mensagemAlerta.classList.remove("senhasCorretas");
        mensagemAlerta.textContent = "Senhas não conferem";
        return false;
    } else {
        mensagemAlerta.style.display = "block";
        mensagemAlerta.classList.add("senhasCorretas");
        mensagemAlerta.textContent = "senhas conferem";
        return false;
    }
}

function confirmarSenhas() {
    if (confirmeSenha.value != "") {
        verBtn.style.display = "block";
        verBtn.onclick = function() {
            if ((senha.type == "password") && (confirmeSenha.type == "password")) {
                senha.type = "text";
                confirmeSenha.type = "text";
                this.textContent = "Não ver";
            } else {
                senha.type = "password";
                confirmeSenha.type = "password";
                this.textContent = "ver";
            }
        }
    } else {
        verBtn.style.display = "none";
    }
}