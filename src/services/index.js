const posts = [
  { message: "Post 1" },
  { message: "Post 2" }
]
export const getPosts = () => {
  //depois alterar para o get do firebase
  return posts;
}
export const createPost = (post) => {
  //alterar para o add do firebase
  posts.push(
    { message: `${post} ${posts.length + 1} ` }
  )
}
//alterar para o banco de dados do firebase
const users = [
  {
    "name": "Beatriz Penalva",
    "email": "biapenalva@gmail.com",
    "password": "salvadormeuamor",
    "bio": "Arquiteta de formação e futura deva",
    "needs": [
      "Firebase",
      "Node.js",
      "Vue.js",
    ],
    "abilities": [
      "CSS",
      "JavaScript",
      "HTML",
      "Figma",
    ],
    "github": "https://github.com/beatrizpenalva",
    "linkedin": "https://www.linkedin.com/in/beatrizpenalva/",
    "twitter": "@beatripenalva_",
  },
  {
    "name": "Gabrielle Almeida",
    "email": "gabriellealmeida.lab@gmail.com",
    "password": "vitors2",
    "bio": "Amo ler e sou muito comunicativa, gosto bastante de UX e estou em transição de carreira",
    "needs": [
      "Firebase",
      "Node.js",
    ],
    "abilities": [
      "JavaScript",
      "React.JS",
      "Bootstrap",
    ],
    "github": "@gabialmeida",
    "linkedin": "Gabrielle Almeida",
    "twitter": "não",
  },
  {
    "name": "Julia Terin",
    "email": "jujugatinha@gmail.com",
    "password": "jujuba",
    "bio": "Cientista social, produtora musical e futura deva",
    "needs": [
      "Firebase",
      "PHP",
    ],
    "abilities": [
      "CSS",
      "JavaScript",
      "HTML",
    ],
    "github": "@juterin",
    "linkedin": "Julia Terin",
    "twitter": "não",
  }
]
export const getUsers = () => {
  return users;
}