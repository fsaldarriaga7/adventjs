/* Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100. */

/* Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado. */

/* Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #. */

/* Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol. */

let height = 5;
let n = height + 2;
let width = height*2-1;
let result = "";
let i = 0;
let j = 0;
let str1="";
let str2="";
let line="";
let center = '*';




str1="";
str2="";
line="";
center = '*';

for (i=0;i<height;i++){
    str1="";
    str2="";

    //Los for de la primera mitad
    for (j=0;j<height-i-1;j++){
        str1 = str1.concat('_');
    }
    for (j=0;j<i;j++){
        str1 = str1.concat('*');        
    }

    //Los for de la segunda mitad
    for (j=0;j<i;j++){
        str2 = str2.concat('*');        
    }
    for (j=0;j<height-i-1;j++){
        str2 = str2.concat('_');
    }

    line = line.concat(str1);
    line = line .concat(center);
    line = line.concat(str2);
    line = line.concat('\n');
}


//Construir las últimas dos líneas

center = '#';
str1="";
str2="";

for (j=0;j<height-1;j++){
    str1 = str1.concat('_');
}

for (j=0;j<height-1;j++){
    str2 = str2.concat('_');
}

line = line.concat(str1);
line = line .concat(center);
line = line.concat(str2);
line = line.concat('\n');

center = '#';
str1="";
str2="";

for (j=0;j<height-1;j++){
    str1 = str1.concat('_');
}

for (j=0;j<height-1;j++){
    str2 = str2.concat('_');
}

line = line.concat(str1);
line = line .concat(center);
line = line.concat(str2);














export default function createXmasTree(height) {
    let i = 0;
    let j = 0;
    let str1="";
    let str2="";
    let line="";
    let center = '*';

    str1="";
    str2="";
    line="";
    center = '*';

    for (i=0;i<height;i++){
        str1="";
        str2="";

        for (j=0;j<height-i-1;j++){
            str1 = str1.concat('_');
        }
        for (j=0;j<i;j++){
            str1 = str1.concat('*');        
        }

        for (j=0;j<i;j++){
            str2 = str2.concat('*');        
        }
        for (j=0;j<height-i-1;j++){
            str2 = str2.concat('_');
        }

        line = line.concat(str1);
        line = line .concat(center);
        line = line.concat(str2);
        line = line.concat('\n');
    }

    center = '#';
    str1="";
    str2="";

    for (j=0;j<height-1;j++){
        str1 = str1.concat('_');
    }

    for (j=0;j<height-1;j++){
        str2 = str2.concat('_');
    }

    line = line.concat(str1);
    line = line .concat(center);
    line = line.concat(str2);
    line = line.concat('\n');

    center = '#';
    str1="";
    str2="";

    for (j=0;j<height-1;j++){
        str1 = str1.concat('_');
    }

    for (j=0;j<height-1;j++){
        str2 = str2.concat('_');
    }

    line = line.concat(str1);
    line = line .concat(center);
    line = line.concat(str2);

    return line;
}

console.log(createXmasTree(20))