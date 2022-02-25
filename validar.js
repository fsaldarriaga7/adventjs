/* Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis... */

//Paso 1 - identificar {} y []
let letter;
let result =  true;
let i = 0;
let pos1 = 0;
let pos2 = 0;
let aux = 0;
let final = 0;


letter = 'aaa(dfdfgdfg)fdgdf(df)gdg(dgdgd)gdgdgfdgf';


if (letter.includes('[')||letter.includes(']')||letter.includes('{')||letter.includes('}')){
    result = false;
}
console.log(result);

//Paso 2 - Eliminar los () vacíos
if (letter.includes('()')||letter.includes('( )')){
    result = false;
}
console.log(result);

//Paso 3 - No hay (
if (!letter.includes('(')){
    result = false;
}


//Paso 4 - Encontrar el primer ( y )
if (letter.indexOf('(')>letter.indexOf(')')) {
    result = false;
}
console.log(result);

//Paso 5 - Correspondencia ( y )
pos1 = letter.indexOf('(');

for (i=pos1;i<letter.length;i++){
    if(!result){
        i=letter.length;
    }
    console.log(pos1);
    console.log(pos2);
    console.log(i);

    if(pos1<0){ //Cuando encontremos el último (, terminar el for. Buscamos un último )
        if(letter.indexOf(')',final+1)>0){
            console.log(letter.indexOf(')',final+1));
            result=false;
            console.log(result);
        }
        i=letter.length;
    }

    pos2 = letter.indexOf(')',pos1);
    console.log(pos2);
    final = pos2;

    if (pos1>pos2){
        console.log(pos1);
        result = false;
        console.log(result);
        i=letter.length;
    };
    
    pos1 = letter.indexOf('(',i+1);;
}

console.log(result);

//Paso 6 - Creando la función

export default function isValid(letter) {
    if (letter.includes('[')||letter.includes(']')||letter.includes('{')||letter.includes('}')){
        result = false;
    }
    
    if (letter.includes('()')||letter.includes('( )')){
        result = false;
    }
    
    if (!letter.includes('(')){
        result = false;
    }
    
    if (letter.indexOf('(')>letter.indexOf(')')) {
        result = false;
    }
    
    pos1 = letter.indexOf('(');
    for (i=pos1;i<letter.length;i++){
        if(!result){
            i=letter.length;
        }
        console.log(pos1);
        console.log(pos2);
        console.log(i);
    
        if(pos1<0){
            if(letter.indexOf(')',final+1)>0){
                console.log(letter.indexOf(')',final+1));
                result=false;
                console.log(result);
            }
            i=letter.length;
        }
    
        pos2 = letter.indexOf(')',pos1);
        console.log(pos2);
        final = pos2;
    
        if (pos1>pos2){
            console.log(pos1);
            result = false;
            console.log(result);
            i=letter.length;
        };
        
        pos1 = letter.indexOf('(',i+1);;
    }
    return result;
}

let a ="() bici";

console.log(isValid(a));

/* "bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌ */