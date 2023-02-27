var btnEn = document.querySelector("#encrypt")
var btnDe = document.querySelector("#desencrypt")
var title = document.querySelector(".title")
var desc = document.querySelector(".desc")
var copyData = "";

var img = document.querySelector("#illustration")

btnEn.addEventListener("click", encriptar)
btnDe.addEventListener("click", desencriptar)

function encriptar(){
    if(img!==null){ img.remove() }
    if(title!==null){ title.remove() }

    //Preparando la tarjeta
    preparando()

    //Encriptando
    let query = document.querySelector("#query"); 
    let texto = query.value

    ejecutando(texto, "E")
}

function desencriptar(){
    if(img!==null){ img.remove() }
    if(title!==null){ title.remove() }

    //Preparando la tarjeta
    preparando()

    //Desencriptando
    let query = document.querySelector("#query"); 
    let texto = query.value

    ejecutando(texto, "D")
}

function preparando(){
    if(document.querySelector("#copy") == null){
        let card = document.querySelector(".card")

        let btn = document.createElement("button")
        btn.id = "copy"
        btn.style.textAlign = "unset"
        btn.onclick = copiar
        btn.textContent = "Copiar"

        card.appendChild(btn)
    }
}

function ejecutando(texto, operacion){
    let resultado = ""
    if(operacion == "E"){
        let total = []
        for (let index = 0; index < texto.length; index++) {
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
        texto = texto.replaceAll("ai", "a")
        texto = texto.replaceAll("enter", "e")
        texto = texto.replaceAll("imes", "i")
        texto = texto.replaceAll("ober", "o")
        texto = texto.replaceAll("ufat", "u")

        resultado = texto
    }

    copyData = resultado
    desc.textContent = resultado
}

function copiar(){
    navigator.clipboard.writeText(copyData)

    let copy = document.querySelector("#copy")
    copy.textContent = "Copiado"
    copy.classList.toggle("active")
    setTimeout(() => {
        copy.textContent = "Copiar"
        copy.classList.toggle("active")
    }, 1000);
}