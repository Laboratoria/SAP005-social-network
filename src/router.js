const name = document.querySelector('#nome')
const lastName = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const password = document.querySelector("#passwordFirst");
const confirmPassword = document.querySelector("#passwordSecond");
const cpf = document.querySelector('#cpf')
const date = document.querySelector('#month')
const btn = document.querySelector('#btn')
const eye = document.querySelector('#eye')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let userName = name.value;
    let lastNameUser = lastName.value;
    let completName = userName[0].toUpperCase() + userName.slice(1) + " " + lastNameUser[0].toUpperCase() + lastNameUser.slice(1)
    let emailUser = email.value;
    let passwordFirst = password.value;
    let passwordSecond = confirmPassword.value;
    let dateBorned = date.value;
    let typedCpf = cpf.value;

    if (typedCpf == "" || typedCpf.length < 11 || dateBorned == "" || passwordFirst != passwordSecond || userName == "" || lastNameUser == "") {
        alert('teste')
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

eye.addEventListener("click", (e) => {
    e.preventDefault();
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
