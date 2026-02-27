let combTextElement = document.getElementById("combustivel")
let combustivel = 10
combTextElement.textContent = combTextElement.textContent + combustivel
let botao = document.getElementById("botao")
let clickEvent = botao.addEventListener("click", function(){
    combustivel += 15
    combTextElement.textContent = "Combustivel: " + combustivel
    if(combustivel >= 100){
        combTextElement.textContent = "Combustivel cheio"
    }
})