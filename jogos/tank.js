let combText = document.getElementById("combustivel")
let combustivel = 10
combText.textContent = combText.textContent + combustivel
let botao = document.getElementById("botao")

const gasArray = [0, 0, 0, 3, 6, 9, 12, 15]
let num = 0
let invert = false

setTimeout(changeNum, 500)

let clickEvent = botao.addEventListener("click", function () {
    combustivel += gasArray[num]
    combText.textContent = "Tanque: " + combustivel
    num = 0
    invert = false
    if (combustivel >= 100) {
        combText.textContent = "Tanque cheio"
    }
})

function changeNum() {
    if (invert == true) {
        num--
    } else {
        num++
    }
    if (num == gasArray.length - 1) {
        invert = true
    } else if (num == 0) {
        invert = false
    }
    botao.textContent = "Encher " + gasArray[num]
    setTimeout(changeNum, 250)
}