let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function agregarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let intentoUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(intentoUsuario===numeroSecreto){
        agregarTexto('p',`Felicidades, acertaste en ${intentos} ${(intentos==1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (intentoUsuario<numeroSecreto) {
            agregarTexto('p', 'fallaste, el número secreto es mayor');
        }else{
            agregarTexto('p', 'fallaste, el número secreto es menor');
        }

        intentos++;
        limpiarCaja();

    }    
}

function limpiarCaja(){
    let caja = document.querySelector('#valorUsuario');
    caja.value = '';
}

function obtenerNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSecretos);

    if (listaNumerosSecretos.length == numeroMaximo){
        agregarTexto('p', 'Ya has adivinado todos los números posibles');
    }else{
        if(listaNumerosSecretos.includes(numeroSecreto)){
            return obtenerNumeroSecreto();
        }
        else{
            listaNumerosSecretos.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesIniciales(){
    agregarTexto('h1', 'JUEGO DEL NÚMERO SECRETO');
    agregarTexto('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = obtenerNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();

    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled', "true");
}

condicionesIniciales();
