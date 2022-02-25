/* Escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎. */

/* Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a. */

//Paso X - Crear un Array con todas las letras
let i = 0;
let letter = 'Esto es una frase larga pero no tiene todas las letras del abecedario';
let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
let specChar = new Array;
specChar.push('á','é','í','ó','ú','ä','ë','ï','ö','ü'); //Se incluyen ä, ë y ï, aunque no existen en el idioma español.
let replace = ['a','e','i','o','u','a','e','i','o','u']; //Array creado de las dos formas, con push y declarado directamente. Para practicar.


//Paso 1 - Convertir la carta a minúsculas
letter = letter.toLowerCase();

//Paso 2 - convertir los caracteres especiales
for (i=0;i<specChar.length;i++){
    if(letter.includes(specChar[i])){
        letter = letter.replaceAll(specChar[i],replace[i]);
    }
}
letter.replaceAll(specChar[i],replace[i]);

console.log(letter);

//Paso 3 - Analizar si falta alguna letra, de ser así, salir de la función
let result = true;
let missing = new Array;
for(i=0;i<letras.length;i++){
    if(!letter.includes(letras[i])){
        missing.push(letras[i]);
        result =  false;
        i=letras.length;
    }
}

console.log(result);
console.log(missing);

//Paso X - Crear la función

export default function pangram(letter) {
    let i = 0;
    let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let specChar = new Array;
    specChar.push('á','é','í','ó','ú','ä','ë','ï','ö','ü');
    let replace = ['a','e','i','o','u','a','e','i','o','u'];

    letter = letter.toLowerCase();

    for (i=0;i<specChar.length;i++){
        if(letter.includes(specChar[i])){
            letter = letter.replaceAll(specChar[i],replace[i]);
        }
    }
    letter.replaceAll(specChar[i],replace[i]);

    let result = true;
    let missing = new Array;
    for(i=0;i<letras.length;i++){
        if(!letter.includes(letras[i])){
            missing.push(letras[i]);
            result =  false;
            i=letras.length;
        }
    }
    
    return result
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')); // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false


