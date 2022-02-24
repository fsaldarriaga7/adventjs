/* Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo número de elementos pero donde los nombres que se repetían se anexe al final (k) 
donde k sería el número de veces que se encontró repetido. */

const files1 = ['photo', 'postcard', 'photo', 'photo', 'video']
const files2 = ['file', 'file', 'file', 'game', 'game']
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']




//Paso 1 - Contar los elementos
let files = new Array;
let i=0;
let j=0;
let cantidad = 0;
let str;

files = files.concat(files1);
files = files.concat(files2);
files = files.concat(files3);
console.log(files);
console.log(files.length);


//Paso 2 - Definir un nuevo Array, independiente
let arrayResultante = new Array;
arrayResultante = files.slice(0);
arrayResultante.reverse();

//Paso 3 - Eliminar duplicados
let filesUnique = new Array;
let last;
let posDuplicado = new Array;

for (i=0;i<files.length;i++) {
    last = arrayResultante.pop();
    if(!filesUnique.includes(last)){
        filesUnique.push(last);
    }
    else {
        posDuplicado.push(i);
    }
}
console.log(filesUnique);
console.log(filesUnique.length);
console.log(posDuplicado);

//Paso 4 - Contar los elementos previos, de los duplicados
let arrayFinal = files.slice(0);
console.log(arrayFinal);


for (i=0;i<posDuplicado.length;i++){
    cantidad = 0;
    for (j=0;j<posDuplicado[i];j++){
        if(files[j]==files[posDuplicado[i]]){
            cantidad++;
            console.log(cantidad);
        }
    }
    str = files[posDuplicado[i]];
    arrayFinal[posDuplicado[i]] = str.concat('(',cantidad,')');
}

console.log(arrayFinal);

export default function fixFiles(files) {
    let arrayResultante = new Array;
    arrayResultante = files.slice(0);
    arrayResultante.reverse();

    let filesUnique = new Array;
    let last;
    let posDuplicado = new Array;

    for (i=0;i<files.length;i++) {
        last = arrayResultante.pop();
        if(!filesUnique.includes(last)){
            filesUnique.push(last);
        }
        else {
            posDuplicado.push(i);
        }
    }

    let arrayFinal = files.slice(0);

    for (i=0;i<posDuplicado.length;i++){
        cantidad = 0;
        for (j=0;j<posDuplicado[i];j++){
            if(files[j]==files[posDuplicado[i]]){
                cantidad++;
                console.log(cantidad);
            }
        }
        str = files[posDuplicado[i]];
        arrayFinal[posDuplicado[i]] = str.concat('(',cantidad,')');
    }

return arrayFinal;
}

console.log(fixFiles(files1));
// ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

console.log(fixFiles(files2)); 
// ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

console.log(fixFiles(files3));
// ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
