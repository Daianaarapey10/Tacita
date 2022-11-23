window.onload = () => {
    let botonServir = document.getElementById("boton-servir");
    let videoTacita = document.getElementById("tacita");
    let videoTacitaHumeando = document.getElementById("tacita-humeando");
    let estadoTacita = "vacia";

  botonServir.onclick = () => {
    if(estadoTacita == "vacia") {
        reproducir(videoTacita);
        
       videoTacita.onended = () => {
        ocultar(videoTacita);
        mostrar(videoTacitaHumeando);
        reproducir(videoTacitaHumeando, "loopear");
        resetear(videoTacita)
        estadoTacita = "llena";
       }
    }
   
  }

 let botonTomar = document.getElementById("boton-tomar");
 let videoTacitaTomando = document.getElementById("tacita-tomando");

 botonTomar.onclick = () => {
    if(estadoTacita == "llena"){
        ocultar(videoTacitaHumeando);
        mostrar(videoTacitaTomando);
        reproducir(videoTacitaTomando);
        resetear(videoTacitaHumeando);

        videoTacitaTomando.onended = () => {
            mostrar(videoTacita);
            ocultar(videoTacitaTomando);
            resetear(videoTacitaTomando);
        }
        estadoTacita = "vacia";
    }
 }

}

function ocultar(video) {
    video.classList.add("display-none"); 
}

function mostrar(video) {
    video.classList.remove("display-none");
}

 function reproducir(video, loopear) {
    if(loopear == "loopear") {
        video.loop = true; 
    }
    video.play();
 }

function resetear(video) {
    video.pause();
    video.currenTime = 0;
}
