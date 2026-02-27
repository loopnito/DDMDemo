const button = document.getElementById("button")
const info = document.getElementById("info")
let seconds = 15
let mousedown = false

button.addEventListener("mousedown",() =>{
    mousedown = true
})
button.addEventListener("mouseup",() =>{
    mousedown = false
})

setInterval(() => {
    if (mousedown == true){
        seconds--
        console.log(seconds)
    } else if (seconds < 15) {
        seconds++
    }
    info.textContent = "Segure o botão abaixo por "+ seconds +" segundos para esfriar a nave"
}, 1000);