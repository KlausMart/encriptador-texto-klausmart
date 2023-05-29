//Elementos HTML
let cuadroTexto = document.querySelector('.cuadro-texto');
let botonEncriptar = document.querySelector('.boton-encriptar');
let botonDesencriptar = document.querySelector('.boton-desencriptar');

let contenedorElementosSalida = document.querySelector('.container-elementos-salida');
let contenedorMensajeResultado = document.querySelector('.container-mensaje-resultado');
let mensajeResultado = document.querySelector('.mensaje-resultado');
let contenedorImagenResultado = document.querySelector('.container-imagen-resultado');
let mensajeNoEncontrado = document.querySelector('.mensaje-no-encontrado');
let contenedorParrafo = document.querySelector('.container-parrafo');
let contenedorBotonCopiar = document.querySelector('.container-boton-copiar');
let botonCopiar = document.querySelector('.boton-copiar');

//Funcion para los botones
botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiarEncriptado);

//Funcion Encriptar
function encriptar(){
    var texto = cuadroTexto.value;
    if(texto.trim() == ''){
        if(contenedorImagenResultado.classList.contains('ocultar') && mensajeNoEncontrado.classList.contains('ocultar') && contenedorParrafo.classList.contains('ocultar')){
            ocultarCamposDeResultado();
            mostrarVistasSinResultado();
            agregarAlert();
        }else{
            agregarAlert();
        }
    }else{
        ocultarVistasSinResultado();
        mostrarCamposDeResultado();
        
        var textoEncriptado = '';
        let obj_letters = {
            a: 'ai',
            e: 'enter',
            i: 'imes',
            o: 'ober',
            u: 'ufat',
        };

        textoEncriptado = texto.replace( /a|e|i|o|u/g, function(matched){return obj_letters[matched]});
        console.log(textoEncriptado);
        mensajeResultado.textContent = textoEncriptado;
        scrollSuave('.container-elementos-salida', 500, 0);
    }
}

//Funcion Desencriptar
function desencriptar(){
    var texto = cuadroTexto.value;
    if(texto.trim() == ''){
        if(contenedorImagenResultado.classList.contains('ocultar') && mensajeNoEncontrado.classList.contains('ocultar') && contenedorParrafo.classList.contains('ocultar')){
            ocultarCamposDeResultado();
            mostrarVistasSinResultado();
            agregarAlert();
        }else{
            agregarAlert();
        }
    }else{
        ocultarVistasSinResultado();
        mostrarCamposDeResultado();
        
        var textoDesEncriptado = '';
        let obj_letters = {
            ai: 'a',
            enter: 'e',
            imes: 'i',
            ober: 'o',
            ufat: 'u',
        };

        textoDesEncriptado = texto.replace( /ai|enter|imes|ober|ufat/g, function(matched){return obj_letters[matched]});
        console.log(textoDesEncriptado);
        mensajeResultado.textContent = textoDesEncriptado;
        scrollSuave('.container-elementos-salida', 500, 0);
    }
}

//Funcion CopiarEncriptado
function copiarEncriptado(){
    let textCopy = mensajeResultado.textContent;
    if(textCopy.trim() == ''){
        alert('Caja vacia');
    }else{
        navigator.clipboard.writeText(textCopy);
        cuadroTexto.select();
        cuadroTexto.focus();
    }
}

//Detectar solo introduzca minusculas y sin acentos
cuadroTexto.addEventListener('input', function(){
    let textInput = cuadroTexto.value;
    textInput = textInput.toLowerCase().replace(/[^a-z\s]/g, '');
    cuadroTexto.value = textInput;
})

//Funciones mostrar u ocultar campos
function mostrarCamposDeResultado(){
    contenedorMensajeResultado.classList.remove('ocultar');
    contenedorBotonCopiar.classList.remove('ocultar');
    botonCopiar.classList.remove('ocultar');
}

function ocultarCamposDeResultado(){
    contenedorMensajeResultado.classList.add('ocultar');
    contenedorBotonCopiar.classList.add('ocultar');
    botonCopiar.classList.add('ocultar');
}

function mostrarVistasSinResultado(){
    contenedorImagenResultado.classList.remove('ocultar');
    mensajeNoEncontrado.classList.remove('ocultar');
    contenedorParrafo.classList.remove('ocultar');
}

function ocultarVistasSinResultado(){
    contenedorImagenResultado.classList.add('ocultar');
    mensajeNoEncontrado.classList.add('ocultar');
    contenedorParrafo.classList.add('ocultar');
}

document.addEventListener('DOMContentLoaded', ocultarCamposDeResultado);