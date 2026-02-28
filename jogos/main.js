class mainStats {
    constructor(combustivel, temp) {
        this.combustivel = combustivel
        this.temp = temp
        this.points = 0
        this.tankBroken = false
        this.tempBroken = false
        this.timeUntilDestruction
    }
}

let stats = new mainStats(100, 10, 0, false, false, 30)
let interval = setInterval(decay, 1000)
const info = document.getElementById("info")
const tankAlarm = document.getElementById("tankAlarm")
const tempAlarm = document.getElementById("tempAlarm")
const sendInfoButton = document.getElementById("sendinfo")
const fixTankButton = document.getElementById("fixTank")
const fixTempButton =document.getElementById("fixTemp")

sendInfoButton.addEventListener('click', infoStart)
fixTankButton.addEventListener('click', malfunctionTank)
fixTempButton.addEventListener('click', malfunctionTemp)

function decay() {
    stats.combustivel -= 1.5
    stats.temp += 1
    info.textContent = "C: " + stats.combustivel + " T: " + stats.temp + " P: " + stats.points

    if (stats.combustivel == 25) {
        tankAlarm.textContent = "!! GASOLINA REQUER REPAROS !!" 
    }
    if (stats.combustivel <= 0) {
        tankAlarm.textContent = "!! GASOLINA EM NIVEL CRITICO !!"
        stats.timeUntilDestruction -= 1
        info.textContent = "C: " + stats.combustivel + " T: " + stats.temp + " P: " + stats.points + " TEMPO ATÉ AUTODESTRUIÇÃO: " + stats.timeUntilDestruction
    }
    if (stats.temp == 100) {
        tempAlarm.textContent = "!! TEMPERATURA REQUER REPAROS !!"
    }
    if (stats.temp >= 150) { 
        tempAlarm.textContent = "!! TEMPERATURA EM NIVEL CRITICO !!"
        stats.timeUntilDestruction -= 1
        info.textContent = "C: " + stats.combustivel + " T: " + stats.temp + " P: " + stats.points + " TEMPO ATÉ AUTODESTRUIÇÃO: " + stats.timeUntilDestruction
    }
    if (stats.timeUntilDestruction == 0) {
        info.textContent = "gg game over"
        //jaoa mude as coisas aq se precisar de ajuda estou aq ok flw
    }
}

function malfunctionTank() {
    stats.tankBroken = true
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
}
