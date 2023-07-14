 var botao=document.querySelector("button")
var estadark= false
botao.addEventListener("click" ,ativardark)       
                                            
function ativardark(){
    
    body.classList.add("dark")

    if(estadark){
        body.classList.remove("dark")
        botao.innerText= "ativar dark"
        estadark=false
     } else {
        body.classList.add("dark")
        botao.innerText= "remove dark"
        estadark=true
} 
}

var botaoIngresso = document.querySelector("button#ingresso")
botaoIngresso.addEventListener("click" ,comprarIngressos) 
function  comprarIngressos(){
    var h1 =document.querySelector("h1")
    h1.innerText="oseu numero no fila é "+ Math.floor( Math.random( ) *322222222222)
}























