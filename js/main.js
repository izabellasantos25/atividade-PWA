window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

const celulas = document.querySelectorAll(".celula");
let jogar = true;
