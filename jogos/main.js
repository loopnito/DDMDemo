import { openTank } from "./alarmOAC.js"

export * as oac from "./alarmOAC.js"
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
let stats = new mainStats(100, 10, false)

function decay(){
    stats.setCombustivel(-1)
    stats.setTemp(+1)
    console.log("wahaha")
    if (stats.combustivel >= 15) {
        console.log(stats.combustivel + " " + stats.temp)
    } else {
        clearInterval(interval)
        oac.openTank()
    }
}

let interval = setInterval(decay, 1000)