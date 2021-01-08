import {
  Navigation
} from "/services/index.js"

export const Feed = () => {
  const nav = Navigation();

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  const content = () => {
    const contentElement = document.createElement("div");
    contentElement.innerHTML = `
    <h1>Post</h1>
    <form>
      <textarea name="" id="textPost" cols="70" rows="5" placeholder="escreva aqui..."></textarea>
      <button id="creatPost" >Post</button>
    </form>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html"><i class="fas fa-home icon"></i>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="profile.html"><i class="fas fa-user icon"></i> Editar perfil</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link nav-link-signOut">Sair</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <section class="container my-3">
    <div class="row">
      <ansine class="col-md-3">
        <section class="card mb-3">
          <div class="twPc-div">
            <div class="twPc-bg twPc-block"></div>
            <div>
                          
              <div class="twPc-divStats">
                <ul class="twPc-Arrange">
                  <li class="twPc-ArrangeSizeFit">
                    <a href="">
                      <span class="twPc-StatLabel twPc-block">Postagens</span>
                      <span class="twPc-StatValue">0</span>
                    </a>
                  </li>
                  <li class="twPc-ArrangeSizeFit">
                    <a href="">
                      <span class="twPc-StatLabel twPc-block">Amigos</span>
                      <span class="twPc-StatValue">0</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
    
        </section>
    
      <main class="col-md-6 mb-6">
     
          <div class="card mb-2">
            <div class="card-header d-flex justify-content-between background-green">
              <div class="photoUser "></div>
              <div class="nameUser"></div>
              <button class="btn btn-primary btn-sm btn-light add-posts" type="bubmit">Postar</button>
            </div>
            <div class="card-body">
              <textarea class="card-text posts-input js-posts-textarea"
                placeholder="Conte a seus amigos as novidades..."></textarea>
            </div>

    <p id="outputPost"></p>
    `;
    return contentElement;
  };
  rootElement.appendChild(content());

  const textPost = rootElement.querySelector("#textPost");
  const creatPost = rootElement.querySelector("#creatPost");
  const outputPost = rootElement.querySelector("#outputPost");

  creatPost.addEventListener("click", (event) => {
    event.preventDefault();
    const saveTextPost = textPost.value;
    console.log("post: " + saveTextPost);
  })

  return rootElement;
};