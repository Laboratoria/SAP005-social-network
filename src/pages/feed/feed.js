if(document.getElementById('post') !== null){
    document.getElementById('post').addEventListener("click", showPost)
    function showPost(e){
    e.preventDefault()
    const postInput = document.getElementsByClassName('resume').value
    document.getElementById('posts').innerHTML = ` <div> ${postInput} </div>
     ` }
} else {
    console.log("Deu não")
}