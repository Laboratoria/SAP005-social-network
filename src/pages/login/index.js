export const Login = () => {
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
};

