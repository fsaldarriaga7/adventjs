/* Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. 

https://adventjs.dev/challenges/02 */

const carta = 'bici coche  balón _playstation bici   coche peluche  '

//Paso 1 - Separar los elementos (Crear un Array con cada uno)

//Buscando el primer espacio
console.log(carta.indexOf(' '));

//Extrayendo la primera palabra
console.log(carta.slice(0,4));

//Modificando la nueva carta
console.log(carta.slice(5,carta.length));

//Primer elemento en una sola línea de código + Nueva carta
console.log(carta.slice(0,carta.indexOf(' ')));
console.log(carta.slice(carta.indexOf(' ')+1,carta.length));

//Agregando los elementos a un Array
let regalos2 = new Array;

regalos2.push(carta.slice(0,carta.indexOf(' ')));

console.log(regalos2);

//Contando la cantidad de palabras
let cantidadRegalos = carta.split(" ");
console.log(cantidadRegalos);

// .-. La función anterior lo hice todo, entonces volvamos a empezar


//Paso 2 - Eliminar los elementos vacíos
let regalos;
regalos = carta.split(" ");
console.log(regalos);

//Eliminando el primer vacío
regalos.splice(regalos.indexOf(''),1);
console.log(regalos);

//Iterando para eliminar todos los vacíos

console.log(regalos.length);

for (let i=0;i<regalos.length;i++){
    if (regalos.includes('')){
        regalos.splice(regalos.indexOf(''),1);
    }    
}

console.log(regalos);

//Paso 3 - Eliminar los elementos tachados
console.log(regalos.length);
for (let i=0;i<regalos.length;i++){
    if (regalos[i].includes('_')){
        regalos.splice(i,1);
    }    
}
console.log(regalos);

//Paso 4 - Contar los elementos (O dicho de otra forma, eliminar los valores duplicados)

let arrayResultante = new Array;
arrayResultante = regalos.slice(0);
console.log(arrayResultante);

arrayResultante.reverse();

console.log(arrayResultante);

let regalosSinDuplicados = new Array;


for (i=0;i<regalos.length;i++) {
    ultimo = arrayResultante.pop();
    if(!regalosSinDuplicados.includes(ultimo)){
        regalosSinDuplicados.push(ultimo);
    }
}
console.log(regalosSinDuplicados);




//Paso 5 - Devolver el valor



//Paso 6 - Crear la función


