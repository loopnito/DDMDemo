//this handles alarm, opening and closing
//technically it also handles starting and finishing games
//LATER SEE IF THIS WILL BE USEFUL

export function soundAlarm(location){
    console.log(location + " alarm triggered")
}
export function openTank(){
    let link = document.getElementById("tankMinigame")
    this.stats.tankBroken = true //later change?
    if (link != undefined) {
        soundAlarm("Tank")
        link.setAttribute("href", "/paginas/tank.html")
    } else {
        console.error("link not found");
    }
}
export function closeTank(){
    let link = document.getElementById("tankMinigame")
    this.stats.tankBroken = false //later change?
    if (link != undefined) {
        link.setAttribute("href", "#")
    } else {
        console.error("link not found");
    }
}