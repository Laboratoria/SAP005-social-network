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