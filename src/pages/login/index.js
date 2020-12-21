import {googleAuth} from'./main';


export const login = ()=>{
    const rootElement = document.createElemente('div');
    rootElement.innerHTML =`
    <div class="container-form">
    <div class="box-rules"
    <figure class="icon">
        <img src="images/icon.png">
    </figure>
    <h1>Bem-vinde ao Coletivo</h1>
    <ul>
        <p>Seja você mesmo</h2>
        <span>certifique-se que suas informações sejam verdadeiras</span>
        <p>Respeito é essencial</h3>
        <span>Aqui o Hate resulta em bloqueio</span>
        <p>Abrace as diversidades</h4>
        <span>Aceitamos e Incentivamos as diferenças</span>
        <p>Denuncie mau comportamento</h5>
        <span>Nos ajude a manter essa rede acolhedora</span>
        </ul>
    </div>
    </div>`
    ;
    return rootElement
};

