/* Descripción del Reto

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...

Disponible en: https://adventjs.dev/challenges/13  */

//Comienzo del Reto

let gift1 = ["📷", "⚽️"];
let gift2 = ["🏈🎸", "🎮🧸"];
let gift3 = ["📷"];

let gift = ["📷","🏈🎸", "🎮🧸"];

console.table(gift);

//Paso 1 - Identificar la cantidad de líneas que tiene el regalo
let lineas = gift.length;

//Paso 2 - Identificar la cantidad de regalos presentes en cada línea y traer el valor máximo
let longitudMaxima = 0;
let longitud;
let i = 0;

for(i = 0;i<lineas;i++) {
    longitud = gift[i].length;
    if (longitud>longitudMaxima) {
        longitudMaxima = longitud;
    }
}

//Paso 3 - Crear las líneas superior e inferior del regalo
gift.push('');
gift.unshift('');

//Paso 4 - Creando la primera y la última línea
let restante;
let j = 0;
let str1 = '';
let str2 = '';

restante = longitudMaxima+2;

for (j=0;j<(restante);j++){    
    str2=str2.concat('*');
}
gift[0]=str2;

gift[lineas+1]=str2;

//Paso 5 - Creando las líneas intermedias


for (i=1;i<lineas+1;i++){ //empezar i en 1, ya la línea 0 está. Toca adicionar una iteración más, por la lóinea agregada en [0] anteriormente.
    str1 = gift[i];
    str2 = '';
    longitud = gift[i].length;
    restante = longitudMaxima-longitud+2;
    for (j=0;j<(restante/2);j++){    
        str1=str1.concat('*');
        str2=str2.concat('*');
    }
    gift[i]=str2.concat(str1);


}
console.table(gift);

//Paso 6 - Crear la función

export default function wrapGifts(gift) {
let lineas = gift.length;
let longitudMaxima = 0;
let longitud;
let i = 0;

for(i = 0;i<lineas;i++) {
    longitud = gift[i].length;
    if (longitud>longitudMaxima) {
        longitudMaxima = longitud;
    }
}
gift.push('');
gift.unshift('');

let restante;
let j = 0;
let str1 = '';
let str2 = '';

restante = longitudMaxima+2;

for (j=0;j<(restante);j++){    
    str2=str2.concat('*');
}
gift[0]=str2;

gift[lineas+1]=str2;

for (i=1;i<lineas+1;i++){ 
    str1 = gift[i];
    str2 = '';
    longitud = gift[i].length;
    restante = longitudMaxima-longitud+2;
    for (j=0;j<(restante/2);j++){    
        str1=str1.concat('*');
        str2=str2.concat('*');
    }
    gift[i]=str2.concat(str1);
}

    return gift;
}