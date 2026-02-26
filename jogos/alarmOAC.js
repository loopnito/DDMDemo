//this handles alarm, opening and closing
//technically it also handles starting and finishing games
export function soundAlarm(){
    console.log("Alarm triggered")
}
export function openTank(){
    let link = document.getElementById("tankMinigame")
    this.tankBroken = true //later change?
    if (link != undefined) {
        soundAlarm()
        link.setAttribute("href", "/paginas/tank.html")
    } else {
        console.error("link not found");
    }
}
export function closeTank(){
    let link = document.getElementById("tankMinigame")
    this.tankBroken = false //later change?
    if (link != undefined) {
        link.setAttribute("href", "#")
    } else {
        console.error("link not found");
    }
}
