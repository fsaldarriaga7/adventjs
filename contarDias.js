//https://adventjs.dev/challenges/05

const date1 = new Date('Dec 1, 2021');
//daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01');
//daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59');
//daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00");
//daysToXmas(date4) // 5
const  holyDate = new Date('Dec 25, 2021');

//Validación, día siguiente
const  holyDate22 = new Date('Dec 25, 2022');


console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(holyDate);

let diff = holyDate.getTime()-date1.getTime();

console.log(diff);


//El Date.parse o el getTime(), me convierten la fecha a milisegundos, acá está la lógica para hacer la conversión.

let segundos = diff/1000;
console.log(segundos);

let minutos = segundos/60;
console.log(minutos);

let horas = minutos/60;
console.log(horas);

let dias = horas/24;
console.log(dias);

//Redondear siempre hacia arriba, el ejercicio indica que falta un día, así falte un segundo.

let diasRestantes = Math.ceil(diff/1000/60/60/24);
console.log(diasRestantes);

// Crear la Función

export default function daysToXmas(date) {
    const  holyDate = new Date('Dec 25, 2021');
    let diff = holyDate.getTime()-date.getTime();
    let diasRestantes = Math.ceil(diff/1000/60/60/24);    
    return diasRestantes
}