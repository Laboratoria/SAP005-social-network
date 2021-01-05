export const Post = () => {
    const container = document.createElement("div");
    container.classList.add("div-post");
    container.innerHTML = `
    
        <div class="">
            <input type="text" class="name" id="name">
            <input type="text" class="post" id="post">
            <button type="button" class="btn" onclick="creatPost()">Postar</button>
        </div>
        <div class="post-container">
        </div>
    
`;
    return container;
};

// const post_container = document.getElementsByClassName('post-container')[0];
// const post = [];
// const user = document.getElementById('name');
// const text_post = document.getElementById('post');

// function creatPost() {
//     const post = {
//         name: user,
//         text: text_post,
//         enjoy: 0
//     };
//     // Método é responsável pela criação e manipulação do relatório da tabela.
//     // ref. referencia o banco de dados.
//     // set. Para setar os dados na URL anterior, e o post se torna uma promisse.
//     firebase.database().ref('post/' * post.name).set(post).then(() => {
//         addScreenCard(post);
//     });
// };

// function deletPost() {

// };

// function enjoyPost() {

// }

// function unlikePost() {

// }

// // DOM
// document.addEventListener("", function() {

// });

// // Adicionar card na tela
// // information é o objeto contendo os dados do post
// function addScreenCard(information){
//     // header do post
//     let header = document.createElement('h2');
//     header.innerHTML = information.name;
//     header.classList.add('post-title');

//     // content do post
//     let content = document.createElement('p');
//     content.classList.add('post-text');
//     content.innerText = information.text_post;

//     // button do post
//     let inner = document.createElement('div');
//     inner.classList.add('row');

//     // button adicionar
//     let button_add = document.createElement('button');
//     button_add.classList.add('btn');
//     button_add.setAttribute('onclick', 'curtir(' + information.id + ')');
//     button_add.innerText = '+';
//     inner.appendChild(button_add);

//     // Contador de curtidas
//     let counter = document.createElement('span');
//     counter.innerHTML = information.enjoy;
//     counter.classList.add('text-center');
//     inner.appendChild(counter);

//     // Botão de subtrair
//     let button_sub = document.createElement('button');
//     button_sub.classList.add('btn', 'btn_link');
//     button_sub.setAttribute('onclick', 'descurtir(' + information.id + ')');
//     button_sub.innerText = '-';
//     inner.appendChild(button_sub);

//     // botão excluir
//     let button_del = document.createElement('button');
//     button_del.classList.add('btn', 'btn_danger');
//     button_del.setAttribute('onclick', 'deletar(' + information.id + ')');
//     button_del.innerText = 'X';
//     inner.appendChild(button_del);

//     // Post
//     let post = document.createElement('div');
//     post.classList.add('post');
//     post.id = information.id
//     let post_body = document.createElement('div');
//     post_body.classList.add('post-body');

//     post_body.appendChild(header);
//     post_body.appendChild(content);
//     post_body.appendChild(inner);
//     post.appendChild(post_body);

//     // Iserir no container
//     post_container.appendChild(post);

// }
