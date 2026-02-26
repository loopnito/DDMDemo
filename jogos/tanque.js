let randomNum = Math.floor(Math.random() * 100)
let button = document.getElementById("button")
let info = document.getElementById("info")
let range = randomNum + 10

info.textContent = info.textContent + randomNum

function refresh(num){
    button.textContent = num
}
let myevent = button.addEventListener("click", function onClick(){
    console.log("hi")
})
console.log(50 >= range)