import { onNavigate } from '../../utils/history.js';

export const Timeline = () => {
    //fazer evento de carregar a pagina: listener("load") (parametro de verificação = onAuthStateChanged) +
    //se estiver logado,onNavigate(timeline) e loadPost, caso contrario, onNavigate('/login')

    window.addEventListener("load", event => {
        event.preventDefault();
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) { 
                onNavigate('/timeline');
                loadPost()
            } else {
                onNavigate('/login');
            }
        });
    })}
    const rootElement = document.createElement("main");
    const timelineContainer = `
        <header class="header-tml"></header>
            <div class="container">
                <section class="form-post">
                    <form id="box-form">
                    <label for="avatar">Choose a profile picture:</label>
                        <input type="file" id="box-img" name=""
                        accept="image/png, image/jpeg">
                        <input type="text" id="box-caption"></input>
                        <button type="submit" id="box-publish">Publicar</button>
                    </form>
                </section>
                <section id="feed-post"></section>
            </div>
    `
    rootElement.innerHTML = timelineContainer;
        const publishPost = rootElement.querySelector("#box-form");
        publishPost.addEventListener("submit", event => {
            event.preventDefault();
            const txt = rootElement.querySelector("#box-caption").value;
            // este elemento é o estrutural da page e o que vai ser carregando com os dados
            const post = {
                uid:"",
                caption: txt,
                likes: 0,
                time:"",
            }
            //esse elemento é responsavel por criar os coleção
            const postCollection = firebase.firestore().collection("form-post");
            //esse elemento é responsavel por adicionar novos posts
            const addPost = postCollection.add(post)
            //essa promise tem como callback a função de carregarPost 
            .then(res => {loadPost()}
            ).catch()
            
            return rootElement;
        });
    
    function printPosts(post) {
        const templatePost =`
        <p>Foi filhin ${post.data().caption}</p>`
        document.getElementById("feed-post").innerHTML += templatePost
    }
    function loadPost() {
        const postCollection = firebase.firestore().collection("form-post");
        postCollection.get().then(snapshot => {
            document.querySelector("#feed-post").innerHTML = "";
            snapshot.forEach( post=> {
            printPosts(post);
        })
    })
}
    
/*<h1 class="logo-tml">coletivo</h1>
        </header>
                <main class="main-tml">
                    <section class="user"> 
                        <figure class="user-avatar">
                            <img src="images/user.png">
                        </figure> 
                        <h2 class="user-name" id="userName">userName</h2>
                        <p class="posted-at">Postado em : 05 de Dezembro de 2021 00:00 horas</p>
                    </section>
                    <section class="post">
                        <figure class="post-img">
                            <img src="https://pbs.twimg.com/media/D9YxIubWsAAn9QH?format=jpg&name=large">
                        </figure>
                        <div class="post-captions">
                            <h3>userName</h3>
                            <p>captions</p>
                        </div>
                    </section>
                </main>*/ 