/* A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null. */



/* sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5] */

let a = 10; //a es el resultado
let num = [3, 5, 7, 2];
let i=0;
let lookNum = 0;
let j=0;
let result = false;
let first;
let second;

for (i=0;i<num.length;i++){
    lookNum = a - num [i];
    if (num.includes(lookNum)){
        for (j=i+1;j<num.length-i-1;j++){
            if (num[j]==lookNum){
                first = num [i];
                second = lookNum;
                result = true;
                i = num.length;
            }
        } 
    }
}

let solution = new Array;

if (result){
    solution.push(first);
    solution.push(second);
}

if (!result){
    solution = null;
}

console.log(solution);


export default function sumPairs(num, a) {
    console.log(num);
    console.log(a);
    let i=0;
    let lookNum = 0;
    let j=0;
    let result = false;
    let first = 0;
    let second = 0;
    
    for (i=0;i<num.length;i++){
        lookNum = a - num [i];
        if (num.includes(lookNum)){
            for (j=i+1;j<num.length;j++){
                if (num[j]==lookNum){
                    first = num [i];
                    second = lookNum;
                    result = true;
                    i = num.length;
                }
            } 
        }
    }

    let solution = new Array;
    
    if (result == true){
        solution.push(first);
        solution.push(second);
    }

    if (!result){
        solution = null;
    }

    return solution;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null


console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]