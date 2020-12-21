// exporte suas funções

export const myFunction = () => {
  // seu código aqui
  console.log();
};

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

submit.addEventListener('click', function(e){

  e.preventDefault();
  console.log('funcionou');
  console.log('oi');
}