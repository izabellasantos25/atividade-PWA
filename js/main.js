window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

const celulas = document.querySelectorAll(".celula");
let jogar = true;

const jogadorX = "X";
const jogadorO = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")){
        jogada(event.target.id);
    }
});

function jogada(id){
    const celula = document.getElementById(id);
    jogo = jogar ? jogadorX : jogadorO;
    celula.textContent = jogo;
    jogar = !jogar;
}