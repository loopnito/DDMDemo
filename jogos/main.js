class mainStats {
    constructor(combustivel, temp) {
        this.combustivel = combustivel
        this.temp = temp
        this.points = 0
        this.tankBroken = false
        this.tempBroken = false
    }
}

let stats = new mainStats(100, 10, 0, false, false)
let interval = setInterval(decay, 1000)
const info = document.getElementById("info")
const tankAlarm = document.getElementById("tankAlarm")
const tempAlarm = document.getElementById("tempAlarm")
const sendInfoButton = document.getElementById("sendinfo")

sendInfoButton.addEventListener('click', infoStart)


function decay() {
    stats.combustivel -= 1.5
    stats.temp += 1
    info.textContent = "C: " + stats.combustivel + " T: " + stats.temp + " P: " + stats.points

    if (stats.combustivel == 25) { malfunctionTank() }

    if (stats.temp == 100) { malfunctionTemp() }

    if (stats.combustivel <= 0) {
        tankAlarm.textContent = "!! GASOLINA EM NIVEL CRITICO !!"
    }
    if (stats.temp >= 150) {
        tempAlarm.textContent = "!! TEMPERATURA EM NIVEL CRITICO !!"
    }
}

function malfunctionTank() {
    stats.tankBroken = true
    tankAlarm.textContent = "!! GASOLINA REQUER REPAROS !!"
    let closedForGood = false // razões de segurança
    let minigameWindow = window.open("/paginas/pop-ups/tank.html")
    let combustivelStatus
    let check = setInterval(function () {
        combustivelStatus = minigameWindow.document.getElementById("combustivel")
        if (minigameWindow.closed == true && closedForGood == false) {
            minigameWindow = window.open("/paginas/pop-ups/tank.html")
        }
        if (combustivelStatus.textContent == "Tanque cheio") {
            stats.combustivel = 100
            tankAlarm.textContent = "|| Gasolina OK ||"
            minigameWindow.close()
            stats.tankBroken = false
            closedForGood = true
            clearInterval(check)
        }
    }, 1000)
}

function malfunctionTemp() {
    stats.tempBroken = true
    tempAlarm.textContent = "!! TEMPERATURA REQUER REPAROS !!"
    let closedForGood = false // razões de segurança
    let minigameWindow = window.open("/paginas/pop-ups/temp.html")
    let tempStatus
    let check = setInterval(function () {
        tempStatus = minigameWindow.document.getElementById("info")
        if (minigameWindow.closed == true && closedForGood == false) {
            minigameWindow = window.open("/paginas/pop-ups/temp.html")
        }
        if (tempStatus.textContent == "Nave esfriada") {
            stats.temp = 10
            tempAlarm.textContent = "|| Temperatura OK ||"
            minigameWindow.close()
            stats.tempBroken = false
            closedForGood = true
            clearInterval(check)
        }
    }, 1000)
}

function infoStart() {
    let minigameWindow = window.open("/paginas/pop-ups/sendInfo.html")
    let cubes = minigameWindow.document.querySelectorAll('.cube')

    let check = setInterval(() => {
        cubes = minigameWindow.document.querySelectorAll('.cube')
        console.log(cubes[0].style.backgroundColor)
        if (cubes[0].style.backgroundColor == cubes[1].style.backgroundColor && cubes[1].style.backgroundColor == cubes[2].style.backgroundColor && cubes[2].style.backgroundColor == cubes[3].style.backgroundColor && cubes[3].style.backgroundColor == cubes[4].style.backgroundColor) {
            stats.points += 2
            minigameWindow.close()
            clearInterval(check)
        }
    }, 1000)

    /*
    let check = setInterval(function () {
        console.log("hello")
        for (let index = 0; index < cubes.length; index++) {
            const element = cubes[index];
            if (prevElement == null || prevElement == undefined) {
                prevElement = element
            } else if (element != prevElement) {
                win = false
            }
            console.log(prevElement)
            console.log(element)
            if (cubes.length - 1 == index) {
                if (win == true) {
                    stats.points = stats.points + 2
                    closedForGood = true
                    minigameWindow.close()
                    clearInterval(check)
                }
            }
        }
    }, 1000)
    */
}
