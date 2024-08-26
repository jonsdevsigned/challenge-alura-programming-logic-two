//DESAFIO 4
// 1. Crea una lista vacía llamada "listaGenerica".

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let text = document.querySelector('p');

//punto 1
const listaGenerica = [];

//punto2
const lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//punto 3
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//punto 4
function elementsView() {
    return console.table(lenguagesDeProgramacion);
}

//punto 5
function elementsInReverse() {
    let languajeInverse = lenguagesDeProgramacion.reverse();
    return console.table(languajeInverse);
}

//punto 6
const numbers = [9, 7, 1, 6, 5, 7, 10, 9, 3, 8, 7];
function average() {
    let add = 0;

    for(let i=0; i<numbers.length; i++) {
        add += numbers[i];
    }
    
    let average = add / numbers.length;

    return text.innerHTML = `
        El promedio de los siguientes numeros [ ${numbers} ] es:
        <p class="answer">${average.toFixed(3)}</p>
    `;
}

//punto 7
function minorMayorNumber() {
    function compare(a, b) {
        return a - b;
      }
    let order = numbers.sort(compare);
    console.log(`El numero mas grande de la lista es: ${order[order.length-1]}`)
    console.log(`El numero mas pequeño de la lista es: ${order[order.length-order.length]}`)
}

//punto 8
function add() {
    let add = 0;
    for(let i=0; i<numbers.length; i++) {
        add += numbers[i];
    }

    return text.innerHTML = `
        La suma de los siguientes numeros [ ${numbers} ] es:
        <p class="answer">${add}</p>
    `;
}

//punto 9
function search() {
    let index = parseInt(prompt('Escriba el numero del que desea conocer su posición en la lista.'));

    return text.innerHTML = `
        Según la lista a continuación [ ${numbers} ], la posición del número ${index} es:
        <p class="answer">${numbers.indexOf(index)}</p>
    `;
}

//punto 10
function union() {
    const numberspair = [20, 64, 4, 18, 92, 100, 2, 6, 38, 88, 22];

    return text.innerHTML = `
        Tengo la lista [ ${numbers} ], y la lista [ ${numberspair} ]
        <p class="answer">Este es el resultado al unir las dos listas
        <br>
        [ ${numbers.concat(numberspair)} ]</p>
    `;
}

//punto 11
function exponent() {
    let numbersExponent = [];
    for(let i=0; i<numbers.length; i++) {
        numbersExponent.push(numbers[i]*numbers[i]);
    }
    
    return text.innerHTML = `
        Lista de números a los que se le aplican el exponente
        <br>
        [ ${numbers} ]
        <p class="answer">Resultado con su exponente:
        <br>
        [ ${numbersExponent} ]</p>
    `;
}