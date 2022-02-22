/* Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50   !             100  
  
  
  Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. (Como los números romanos)


  
  */


/* decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (1 - 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN */

let codeNum = ('.;!');

//Paso 1 - Identificar los caracteres

let components = codeNum.split('');


//Paso 2 - Contar la cantidad de caracteres y la cantidad de puntos, comas y signos de admiración

let i;
let puntos = 0;
let comas = 0;
let dosPuntos = 0;
let puntoComa = 0;
let admiracion = 0;
let cantidadCaracteres = components.length;
let resultado = 0;

if(components.includes('.')){
    for (i=0;i<cantidadCaracteres;i++){
        if (components[i] == ".") {
        puntos++;
        }
    }
}

if(components.includes(',')){
    for (i=0;i<cantidadCaracteres;i++){
        if (components[i] == ",") {
        comas++;
        }
    }
}

if(components.includes(':')){
    for (i=0;i<cantidadCaracteres;i++){
        if (components[i] == ":") {
        dosPuntos++;
        }
    }
}

if(components.includes(';')){
    for (i=0;i<cantidadCaracteres;i++){
        if (components[i] == ";") {
        puntoComa++;
        }
    }
}

if(components.includes('!')){
    for (i=0;i<cantidadCaracteres;i++){
        if (components[i] == "!") {
        admiracion++;
        }
    }
}

//Paso 3 - Realizar las validaciones de caracteres diferentes
if(components.length!=(comas+puntos+dosPuntos+puntoComa+admiracion)) {
    resultado = NaN;
    console.log(resultado);
}

//Paso 4 - Hacer el cálculo

let valorActual = 0;
let valorAnterior = 0;
if (resultado == 0) {
    for (i=0;i<components.length;i++) {
/*         console.log(i);
        console.log(components[components.length-i]);
        console.log(components.length-i-1); */
        if(components[components.length-i-1] == "!"){
            valorActual = 100;
            if(valorActual<valorAnterior){
                resultado = resultado - valorActual;
            }
            else {
                resultado = resultado + valorActual;
            }
            valorAnterior = valorActual;
        }
        if(components[components.length-i-1] == ";"){
            valorActual = 50;
            if(valorActual<valorAnterior){
                resultado = resultado - valorActual;
            }
            else {
                resultado = resultado + valorActual;
            }
            valorAnterior = valorActual;
        }
        if(components[components.length-i-1] == ":"){
            valorActual = 10;
            if(valorActual<valorAnterior){
                resultado = resultado - valorActual;
            }
            else {
                resultado = resultado + valorActual;
            }
            valorAnterior = valorActual;
        }
        if(components[components.length-i-1] == ","){
            valorActual = 5;
            if(valorActual<valorAnterior){
                resultado = resultado - valorActual;
            }
            else {
                resultado = resultado + valorActual;
            }
            valorAnterior = valorActual;
        }
        if(components[components.length-i-1] == "."){
            valorActual = 1;
            if(valorActual<valorAnterior){
                resultado = resultado - valorActual;
            }
            else {
                resultado = resultado + valorActual;
            }
            valorAnterior = valorActual;
        }
    }
}

console.log(resultado);

//Paso X - Crear la función


export default function decodeNumber(symbols) {
    
    let components = symbols.split('');
    let i;
    let puntos = 0;
    let comas = 0;
    let dosPuntos = 0;
    let puntoComa = 0;
    let admiracion = 0;
    let cantidadCaracteres = components.length;
    let resultado = 0;

    if(components.includes('.')){
        for (i=0;i<cantidadCaracteres;i++){
            if (components[i] == ".") {
            puntos++;
            }
        }
    }

    if(components.includes(',')){
        for (i=0;i<cantidadCaracteres;i++){
            if (components[i] == ",") {
            comas++;
            }
        }
    }

    if(components.includes(':')){
        for (i=0;i<cantidadCaracteres;i++){
            if (components[i] == ":") {
            dosPuntos++;
            }
        }
    }

    if(components.includes(';')){
        for (i=0;i<cantidadCaracteres;i++){
            if (components[i] == ";") {
            puntoComa++;
            }
        }
    }

    if(components.includes('!')){
        for (i=0;i<cantidadCaracteres;i++){
            if (components[i] == "!") {
            admiracion++;
            }
        }
    }

    if(components.length!=(comas+puntos+dosPuntos+puntoComa+admiracion)) {
        resultado = NaN;
        console.log(resultado);
    }

    let valorActual = 0;
    let valorAnterior = 0;
    if (resultado == 0) {
        for (i=0;i<components.length;i++) {
            if(components[components.length-i-1] == "!"){
                valorActual = 100;
                if(valorActual<valorAnterior){
                    resultado = resultado - valorActual;
                }
                else {
                    resultado = resultado + valorActual;
                }
                valorAnterior = valorActual;
            }
            if(components[components.length-i-1] == ";"){
                valorActual = 50;
                if(valorActual<valorAnterior){
                    resultado = resultado - valorActual;
                }
                else {
                    resultado = resultado + valorActual;
                }
                valorAnterior = valorActual;
            }
            if(components[components.length-i-1] == ":"){
                valorActual = 10;
                if(valorActual<valorAnterior){
                    resultado = resultado - valorActual;
                }
                else {
                    resultado = resultado + valorActual;
                }
                valorAnterior = valorActual;
            }
            if(components[components.length-i-1] == ","){
                valorActual = 5;
                if(valorActual<valorAnterior){
                    resultado = resultado - valorActual;
                }
                else {
                    resultado = resultado + valorActual;
                }
                valorAnterior = valorActual;
            }
            if(components[components.length-i-1] == "."){
                valorActual = 1;
                if(valorActual<valorAnterior){
                    resultado = resultado - valorActual;
                }
                else {
                    resultado = resultado + valorActual;
                }
                valorAnterior = valorActual;
            }
        }
    }
        return resultado;
}

let x;

x=decodeNumber('...'); // 3
console.log(x);
x=decodeNumber('.,'); // 4 (5 - 1)
console.log(x);

x=decodeNumber(',.'); // 6 (5 + 1)
console.log(x);

x=decodeNumber(',...'); // 8 (5 + 3)
console.log(x);

x=decodeNumber('.........!'); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(x);

x=decodeNumber('.;'); // 49 (50 - 1)
console.log(x);

x=decodeNumber('..,'); // 5 (1 - 1 + 5)
console.log(x);

x=decodeNumber('..,!'); // 95 (1 - 1 - 5 + 100)
console.log(x);

x=decodeNumber('.;!'); // 49 (-1 -50 + 100)
console.log(x);

x=decodeNumber('!!!'); // 300
console.log(x);

x=decodeNumber(';!'); // 50
console.log(x);

x=decodeNumber(';.W'); // NaN
console.log(x);
