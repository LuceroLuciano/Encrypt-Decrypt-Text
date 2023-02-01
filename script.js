//let cadenaEncriptar

function encriptarTexto(texto) {
    let cadenaEncriptar = texto.split("") // Pasamos la cadenaEncriptar a un arreglo
    console.log(cadenaEncriptar)

    let i  = 0
    
    while(i < cadenaEncriptar.length) {
        if (cadenaEncriptar[i] === 'e') {
            cadenaEncriptar[i] = 'enter'
        } else if (cadenaEncriptar[i] === 'i') {
            cadenaEncriptar[i] = 'imes'
        } else if (cadenaEncriptar[i] === 'a') {
            cadenaEncriptar[i] = 'ai'
        } else if (cadenaEncriptar[i] === 'o') {
            cadenaEncriptar[i] = 'ober'
        } else if (cadenaEncriptar[i] === 'u') {
            cadenaEncriptar[i] = 'ufat'
        } 
        
        i++    
    }

    let textoEncriptado = cadenaEncriptar.join("")

    return textoEncriptado
}

console.log(encriptarTexto('hola'))
console.log(encriptarTexto('gato'))

console.log(encriptarTexto('Hola como estas'))
console.log(encriptarTexto('como'))

console.log(encriptarTexto('estas'))


console.log("============= Desencriptar =================")



