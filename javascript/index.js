window.onload = () => {
    let botonServir = document.getElementById("boton-servir");
    let videoTacita = document.getElementById("tacita");
    let videoTacitaHumeando = document.getElementById("tacita-humeando");
    let estadoTacita = 'vacia';

    botonServir.onclick = () => {
        // Apreto el boton de servir, se fija si la tacita está vacia
        // Si está llena, no pasa nada.
        if (estadoTacita == 'vacia') {
            // Si está vacía se da play al video
            reproducir(videoTacita);
            
            // Cuando termina ese video, se pone el video de la tetera humeando
            videoTacita.onended = () => {
                ocultar(videoTacita);
                mostrar(videoTacitaHumeando);
                reproducir(videoTacitaHumeando, 'loopear');
                resetear(videoTacita);
                estadoTacita = 'llena';
            }

        }
    }

    let botonTomar = document.getElementById("boton-tomar");
    let videoTacitaTomando = document.getElementById("tacita-tomando");
    
    // Apreto el boton de tomar, se fija si la tacita tiene liquido
    botonTomar.onclick = () => {
        if (estadoTacita == "llena") {
            
            // Si tiene, se vacía la tacita

            ocultar(videoTacitaHumeando);
            mostrar(videoTacitaTomando);
            reproducir(videoTacitaTomando);
            resetear(videoTacitaHumeando);
            
            videoTacitaTomando.onended = () => {
                mostrar(videoTacita);
                ocultar(videoTacitaTomando);
                resetear(videoTacitaTomando);
                estadoTacita = 'vacia';
            }
        }
    }
}

function ocultar(video) {
    video.classList.add('display-none');
}

function mostrar (video) {
    video.classList.remove('display-none');
}

function reproducir(video, loopear) {
    if (loopear == 'loopear') {
        video.loop = true;
    }
    video.play();
}

function resetear (video) {
    video.pause();
    video.currentTime = 0;
}