// 1 passo - selecionar todas as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

function removerClassePlayingDeTodas() {
    listaDeTeclas.forEach(tecla => {
        tecla.classList.remove('playing');
    });
}

function pararTodosOsSons() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

function tocarSom(seletorAudio, tecla) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        removerClassePlayingDeTodas();
        pararTodosOsSons(); // Para todos os outros sons antes de tocar o novo

        tecla.classList.add('playing');
        elemento.play();

        // Remove a classe 'playing' quando o áudio terminar
        elemento.onended = () => {
            tecla.classList.remove('playing');
        };
    } else {  
        console.log('Elemento não encontrado ou seletor inválido'); 
    } 
}

// adicionar evento de clique 

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocarSom(idAudio, tecla);
    }


    tecla.onkeydown = function(event) {
        if (event.code === 'Space'|| event.code === 'Enter'){
        tecla.classList.add('playing');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('playing');
    }
}    