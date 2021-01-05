export const Feed = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
     <nav>
      
        <div class="menu-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <ul class="nav-links">
          <li>
          <a class="name-nav">
            <strong class="name-menu">menu</strong></a>
          </li>
          <li>
            <a href="#" id="end-btn">Sair <i class="fas fa-sign-out-alt"></i></a>
          </li>
        </ul>
      </nav>
        <main class="main">
          <div class="newPost">
            <div class="infoUser">
              <div class="imgUser"></div>
              <strong class="nameUser"></strong>
            </div>
            <form class="formPost" action="#" method="POST" enctype="multipart/form-data">
              <textarea
                name="textearea"
                id="wrt-post"
                placeholder="O que podemos mudar hoje com arte?"
              ></textarea>
              <div class="iconButtons">
                <button id="btn-pst" type="submit" class="btnSubmit">Publicar</button>
              </div>
            </form>
          </div>
        <main>
          <div id="all-posts"></div>
      `;

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            divFeed.querySelector('.nameUser').innerHTML = firebase.auth().currentUser.displayName;
            divFeed.querySelector('.name-menu').innerHTML = firebase.auth().currentUser.displayName;
        }
    })


    return rootElement;
};