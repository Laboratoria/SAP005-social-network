const password = document.querySelector("#senha");
const confirmPassword = document.querySelector("#confirmeSenha");
const cpf = document.querySelector('#cpf')
const date = document.querySelector('#month')
const btn = document.querySelector('#btn')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let passwordFist = password.value;
    let passwordSecond = confirmPassword.value;
    let dateBorned = date.value;
    let typedCpf = cpf.value;
    if (typedCpf == "" || typedCpf.length < 11 || dateBorned == "" || passwordFist != passwordSecond ) {
        alert('teste')
    } else {
        let replaceCpf = typedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            (regex, argument1, argument2, argument3, argument4) => {
                return argument1 + '.' + argument2 + '.' + argument3 + '-' + argument4;
            })
        console.log(typedCpf = replaceCpf, dateBorned, passwordFist);
    }   
   
    
  

    cpf.value = "";
    date.value = "";
})



// function confirmarSenhas() {
//     if (confirmeSenha.value != "") {
//         verBtn.style.display = "block";
//         verBtn.onclick = function() {
//             if ((senha.type == "password") && (confirmeSenha.type == "password")) {
//                 senha.type = "text";
//                 confirmeSenha.type = "text";
//                 this.textContent = "Não ver";
//             } else {
//                 senha.type = "password";
//                 confirmeSenha.type = "password";
//                 this.textContent = "ver";
//             }
//         }
//     } else {
//         verBtn.style.display = "none";
//     }
// }