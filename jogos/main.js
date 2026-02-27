import * as gm from "./gameManagement.js"

class mainStats {
    constructor(combustivel, temp){
        this.combustivel = combustivel
        this.temp = temp
        this.tankBroken = false
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

let stats = new mainStats(11, 10, false)
let interval = setInterval(decay, 1000)

function decay(){
    stats.setCombustivel(-1)
    stats.setTemp(+1)
    console.log("wahaha")
    if (stats.combustivel == 10) {
        clearInterval(interval)
        let minigameWindow = window.open("/paginas/pop-ups/test.html")
        let check = setInterval(function(){
            let combustivelStatus = minigameWindow.document.getElementById("combustivel")
            console.log(combustivelStatus)
            if (combustivelStatus.textContent == "Combustivel cheio"){
                
                window.close()
                console.log("hi")
            }
        }, 1000)
    }
}

