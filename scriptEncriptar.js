// Script for encrypt the text
// Using metod replace()

/* Metod replace() search a global string or a specif value and return a string whit the specific values replaced */

/* rules of encrypt


* La letra "e" es convertida para "enter"
* La letra "i" es convertida para "imes"
* La letra "a" es convertida para "ai"
* La letra "o" es convertida para "ober"
* La letra "u" es convertida para "ufat"
*/

// function encrypt the text
function encryptText () {
    let textToEncrypt = document.getElementById("text").value

    let wordText = textToEncrypt.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")

    document.getElementById("area_mensaje_texto").innerHTML = wordText
}


// function for decrypt the text
function decryptText () {
    let textDecrypt =  document.getElementById("text").value

    let wordText = textDecrypt.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u")

    document.getElementById("area_mensaje_texto").innerHTML = wordText
    
    
}

// function for copy the text
function copy(area_mensaje_texto) {
    // Crea un campo de texto "oculto"
    let auxiliar = document.createElement("input")
    // Asigna el contenido del elemento especificado al valor del campo
    auxiliar.setAttribute("value", document.getElementById(area_mensaje_texto).innerHTML)
    // añade el campo a la pagina
    document.body.appendChild(auxiliar)
    // selecciona el contenido del campo
    auxiliar.select()
    // Copia el texto seleccionado
    document.execCommand("copy")
    // Elimina el campo de la página
    document.body.removeChild(auxiliar)
}



function showMessageAndButton() {
    // mostrar los elemntos texto y boton
    let showTexto = document.getElementById("area_mensaje_texto");
    let showButton = document.getElementById("button-copy")
    showTexto.style.display = "block"
    showButton.style.display = "block"
    
    // Ocultar los elementos imagen, y texto 
    let showImage =  document.getElementById("img_munieco")
    showImage.style.display = "none"
    let mostrar = document.getElementById("mensaje_mostrar")
    mostrar.style.display = "none"
    let showParrafo = document.getElementById("parrafo_mostrar")
    showParrafo.style.display = "none"

}

