import * as gm from "./gameManagement.js"

class mainStats {
    constructor(combustivel, temp){
        this.combustivel = combustivel
        this.temp = temp
        this.tankBroken = false
        this.tempBroken = false
    }
    setCombustivel(setter){
        this.combustivel += setter
    }
    setTemp(setter){
        this.temp += setter
    }
    setTankStatus(setter){ //não esquece que é SETTANKSTATUS!!!!!!!
        this.tankBroken = setter
    }
}

let stats = new mainStats(100, 10, false, false)
let interval = setInterval(decay, 1000)
const info = document.getElementById("info")
const tankAlarm = document.getElementById("tankAlarm")
const tempAlarm = document.getElementById("tempAlarm")

function decay(){
    stats.setCombustivel(-1.5)
    stats.setTemp(+1)
    info.textContent = "C: " + stats.combustivel + " T: " + stats.temp

    if (stats.combustivel == 25) {
        stats.tankBroken = true
        tankAlarm.textContent = "!! GASOLINA REQUER REPAROS !!"
        let closedForGood = false// razões de segurança
        stats.combustivel = 0
        let minigameWindow = window.open("/paginas/pop-ups/tank.html")
        let combustivelStatus
        let check = setInterval(function(){
            combustivelStatus = minigameWindow.document.getElementById("combustivel")
            if (minigameWindow.closed == true && closedForGood == false){
                console.log("nuh uh")
                minigameWindow = window.open("/paginas/pop-ups/tank.html")
            }
            if (combustivelStatus.textContent == "Combustivel cheio"){
                stats.combustivel = 100
                tankAlarm.textContent = "|| Gasolina OK ||"
                minigameWindow.close()
                closedForGood = true
                clearInterval(check)
            }
        }, 1000)
    } //later turn into function

    if (stats.temp > 100) {
        stats.tempBroken = true
        tempAlarm.textContent = "!! TEMPERATURA REQUER REPAROS !!"
        let closedForGood = false// razões de segurança
        stats.combustivel = 0
        clearInterval(interval)
        let minigameWindow = window.open("/paginas/pop-ups/tank.html")
        let combustivelStatus
        let check = setInterval(function(){
            combustivelStatus = minigameWindow.document.getElementById("combustivel")
            if (minigameWindow.closed == true && closedForGood == false){
                console.log("nuh uh")
                minigameWindow = window.open("/paginas/pop-ups/tank.html")
            }
            if (combustivelStatus.textContent == "Combustivel cheio"){
                stats.combustivel = 100
                tankAlarm.textContent = "|| Gasolina OK ||"
                minigameWindow.close()
                closedForGood = true
                clearInterval(check)
                interval = setInterval(decay, 1000)
            }
        }, 1000)
    }
    if (stats.combustivel <= 0){
        tankAlarm.textContent = "!! GASOLINA EM NIVEL CRITICO !!"
    }
}

