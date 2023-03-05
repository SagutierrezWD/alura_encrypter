const input = document.querySelector(".seccion-entrada__text-area");
const enc = document.getElementById("boton-enc");
const de = document.getElementById("boton-de");
const output = document.getElementById("tarjeta__resultado");
const imagen = document.querySelector(".tarjeta__ilustracion");
const title = document.querySelector(".tarjeta__titulo");
const text = document.querySelector(".tarjeta__texto");
const copy = document.getElementById("copiar");

enc.addEventListener("click", encriptar);
de.addEventListener("click", descencriptar);

function encriptar(){
    ejecutando(input.value, "E")
}

function descencriptar(){
    ejecutando(input.value, "D")
}

function ejecutando(texto, operacion){
    let resultado = ""

    if(validar(texto) == true){
        return true
    };

    if(operacion == "E"){
        let total = []
        for (let index = 0; texto.length >= index; index++) {
            total.push(texto.charAt(index))
        }

        for (let index = 0; index < total.length; index++) {
            switch (total[index]) {
                case "a":
                    resultado+="ai"
                    break;
                case "e":
                    resultado+="enter"
                    break;
                case "i":
                    resultado+="imes"
                    break;
                case "o":
                    resultado+="ober"
                    break;
                case "u":
                    resultado+="ufat"
                    break;
                default:
                    resultado+=total[index]
                    break;
            }
        }
    }else{
        texto = input.value
        texto = texto.replaceAll("ai", "a")
        texto = texto.replaceAll("enter", "e")
        texto = texto.replaceAll("imes", "i")
        texto = texto.replaceAll("ober", "o")
        texto = texto.replaceAll("ufat", "u")
        resultado = texto
    }

    limpiar()   //retirando la imagen y otros elementos de l atarjeta
    preparar()  //cambiando estilos para mostrar el boton de copiar y el resultado

    output.textContent = resultado
}

function validar(texto){
    let validar = texto;
    if(!validar.match(/^[^ÁÉÍÓÚáéíóúA-Z]+$/)){
        alert("No se permiten mayúsculas o acentos")
        return true
    }
}

function limpiar(){
    imagen.remove();
    title.remove();
    text.remove();
}

function preparar(){
    output.style.display = "block";
    copy.style.display = "block";
}

function copiar(){
    //copiando al portapapeles
    navigator.clipboard.writeText(output.textContent);

    //cambiar estado del boton
    copy.textContent = "Copiado";
    copy.classList.toggle("boton-transparente--activo");
    setTimeout(() => {
        copy.classList.toggle("boton-transparente--activo");
        copy.textContent = "Copiar"
    }, 1000);
}
