const cubes = document.querySelectorAll('.cube')
const colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"]

for (let index = 0; index < cubes.length; index++) {
    const element = cubes[index];
    element.style.backgroundColor = colors[Math.floor(Math.random() * (cubes.length + 1))]
    
    element.addEventListener("click", () => {
        if (element.style.backgroundColor == colors[colors.length - 1]){
            element.style.backgroundColor = colors[0]
        } else {
            element.style.backgroundColor = colors[colors.indexOf(element.style.backgroundColor) + 1]
        }
    })
}

//check for uhhhhhh hmmm you know what you check yeah u the guy
