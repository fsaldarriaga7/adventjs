/* Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a. */

let specChar = new Array;
specChar.push('á','é','í','ó','ú','ä','ë','ï','ö','ü'); //Se incluyen ä, ë y ï, aunque no existen en el idioma español

let replace = ['a','e','i','o','u','a','e','i','o','u'];
let letter = 'Extraño pan de col y kiwi se quemó bajo fugaz vaho. Pruebas á é í ó ú ä ë ï ö ü';
let i=0;

letter = letter.toLowerCase();

for (i=0;i<specChar.length;i++){
    if(letter.includes(specChar[i])){
        letter = letter.replaceAll(specChar[i],replace[i]);
    }
}

letter.replaceAll(specChar[i],replace[i]);

console.log(letter);
