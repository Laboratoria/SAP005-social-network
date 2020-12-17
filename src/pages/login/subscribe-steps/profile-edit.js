
document.getElementById("change-color").addEventListener("click", changeColor)
let count = 0
function changeColor() {
    count += 1
    if(count == 1){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa1.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
    if(count == 2){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa2.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
    if(count == 3){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa3.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
    if(count == 4){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa4.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
    if(count == 5){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa5.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
    if(count == 6){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa6.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
    if(count == 7){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa7.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
    if(count == 8){
        document.getElementById("background-profile").style.backgroundImage = "url('/src/pages/login/subscribe-steps/background-profile/capa8.jpg')"
        document.getElementById("background-profile").style.backgroundRepeat = "no-repeat"
        document.getElementById("background-profile").style.backgroundSize = "cover"
    }
}
   