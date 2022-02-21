const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

//Cómo buscar
console.log (ovejas[0].name.includes('a'));
console.log (ovejas[0].name.includes('n'));

//Convertir todo a Minúsculas para poder buscar sin importar mayúsculas o minúsculas
console.log(ovejas[0].name.toLowerCase());

//toLowerCase Funcionando
console.log (ovejas[0].name.toLowerCase().includes('n'));


//Nuevo Array, con las ovejas que incluyen las letras 'a' u 'o' en sus nombres
let ovejasNombreAN = new Array;
let i;

console.log(ovejas.length);

for (i=0; i<ovejas.length; i++){
    if (ovejas[i].name.toLowerCase().includes('a')&&ovejas[i].name.toLowerCase().includes('n')) {
        ovejasNombreAN.push(ovejas[i]);        
    }
}

console.log(ovejasNombreAN);
console.log (ovejasRojas);
