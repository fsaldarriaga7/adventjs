/* Escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎. */

//Paso X - Crear un Array con todas las letras
let letter = 'Extraño pan de col y kiwi se quemó bajo fugaz vaho';

let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

//Paso X - Convertir la carta a minúsculas
letter = letter.toLowerCase();

//Paso X - convertir los caracteres especiales

//Paso X - Analizar si falta alguna letra y salir de a función
let i = 0;
let result = true;
let missing = new Array;
for(i=0;i<letras.length;i++){
    if(!letter.includes(letras[i])){
        result = false;
        missing.push(letras[i]);

    }
}

console.log(result);
console.log(missing);




//Paso X - Crear la función

export default function pangram(letter) {
    
    return false
}