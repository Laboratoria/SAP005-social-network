const password = document.querySelector("#passwordFirst");
const confirmPassword = document.querySelector("#passwordSecond");
const cpf = document.querySelector('#cpf')
const date = document.querySelector('#month')
const eye = document.querySelector('#eye')
const btn = document.querySelector('#btn')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let passwordFirst = password.value;
    let passwordSecond = confirmPassword.value;
    let dateBorned = date.value;
    let typedCpf = cpf.value;
    if (typedCpf == "" || typedCpf.length < 11 || dateBorned == "") {
        alert('teste')
    } else if (passwordFirst != passwordSecond) {
        confirmPassword.style.borderColor = "red";
    } else if (passwordFirst == passwordSecond) {
        confirmPassword.style.borderColor = "none";
    } else {
        let replaceCpf = typedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            (regex, argument1, argument2, argument3, argument4) => {
                return argument1 + '.' + argument2 + '.' + argument3 + '-' + argument4;
            })
        console.log(typedCpf = replaceCpf, dateBorned, passwordFirst);
    }




    cpf.value = "";
    date.value = "";
})

eye.addEventListener("click", () => {
    const showPassword = document.querySelector("#passwordFirst");
    const showPassword2 = document.querySelector("#passwordSecond");
    if (showPassword.type == "password" && showPassword2.type == "password") {
        showPassword.type = "text";
        showPassword2.type = "text";
    } else {
        showPassword.type = "password";
        showPassword2.type = "password";
    }
})


// function confirmarSenhas() {
//     if (confirmPassword.value != "") {
//         verBtn.style.display = "block";
//         verBtn.onclick = function() {
//             if ((password.type == "password") && (confirmPassword.type == "password")) {
//                 password.type = "text";
//                 confirmPassword.type = "text";
//                 this.textContent = "Não ver";
//             } else {
//                 password.type = "password";
//                 confirmPassword.type = "password";
//                 this.textContent = "ver";
//             }
//         }
//     } else {
//         verBtn.style.display = "none";
//     }
// }
