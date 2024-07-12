//Desafio 3
// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

//punto 1
function pointOne(){
  function imcCalculator() {
    let height = parseFloat(prompt('¿Qué altura tiene? Escribala en metros. Use el punto (.) para separar decimales.'));
    let weight = parseFloat(prompt('¿Cuál es su peso? Escribala en kilogramos. Use el punto (.) para separar decimales.'));
    let imc = parseFloat(weight/(height*height))
    alert(`El índice de tu masa corporal es ${imc}. Ya que tu altura es de: ${height}m y tu peso de: ${weight}kg`);
  }
  return imcCalculator();
}

//punto 2
function pointTwo(){
  //El usuario coloca el numero del cual quiere el resultado factorial
  let factorialNum = parseInt(prompt('Escriba un número para dar su valor factorial'));
  let multiNum = [];
  //Ciclo for para crear los números a multiplicar para el valor factorial
  for(a=factorialNum; a>=1; a--){
    multiNum.push(a);
  }

  console.log(multiNum.reverse());

  let repeat = -1;
  let result = 0;
  while (repeat < multiNum.length-1) {
    repeat++;
    result = repeat **= multiNum[repeat];
    console.log(`El total es: ${result}`);

  }
  console.log(`el tamaño de nuestro arreglo es de ${multiNum.length-1}`);
  //sizeArray toma la logitud que tiene el array

   /*//Este for recorre el array multiNum
  for(sizeArray;sizeArray>=0;sizeArray--){
    console.log(`En la posición ${sizeArray} se encuentra el número ${multiNum[sizeArray]}`)
    console.log(`Multiplicado valor = ${multiNum[sizeArray]*multiNum[sizeArray]}`)
  }
  //console.log(multiNum.length) */
}

//punto 3
function pointThree(){
  let value = parseInt(prompt('Ingrese una cantidad.\nEl valor ingresado sera convertido a dolares basado en el peso Colombiano'));
  console.log(value);
  console.log(typeof value);
  let moneyDolar = 3950
  console.log(value*moneyDolar)

}

let text = document.querySelector('p');

//punto 4
function pointFour(){
  alert('Calculemos el área y perímetro de un rectángulo');

  let base = parseFloat(prompt('Ingrese la medida del ancho en cms. Use el punto (.) para separar decimales.'));
  let height = parseFloat(prompt('ingrese la medida de la altura en cms. Use el punto (.) para separar decimales.'));

  text.innerHTML = `
  El rectangulo tiene un ancho de ${base}cms y una altura de ${height}cms
  <br>
  <p class="answer">Su área es = ${parseInt(base*height)}cms²<p>
  <p class= "answer">Su perímetro es = ${parseInt((base*2)+(height*2))}cms<p>
  `;
}

//punto 5
function pointFive(){
  alert('Calculemos el área y perímetro de un círculo');

  let radius = parseFloat(prompt('Ingrese el radio del circulo en cms. Use el punto (.) para separar decimales.'));
  const pi = parseFloat(3.14);
  //let area = parseFloat(pi*(radius*radius));
  let area = Number(pi*(radius*radius)).toFixed(2);
  //let perimeter = parseFloat((2*pi)*radius);
  let perimeter = Number((2*pi)*radius).toFixed(2);

  text.innerHTML = `
  El círculo tiene un radio de ${radius}cms
  <br>
  <p class="answer">Su área es = ${area}cms²</p>
  <p class="answer">Su perímetro es = ${perimeter}cms</p>
  `;
}

//punto 6
function pointSix(){
  let num = parseInt(prompt('Ingrese el numero del cual quiere ver su tabla de Multiplicar'));
  let multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for(n=0; n<=multiplier.length-1; n++){
    /* text.innerHTML= `
    <p>Tabla de multiplicar del ${num}</p>
    <p class="answer">${num} x ${multiplier[n]} = ${num*multiplier[n]}</p>
    `; */
    //console.log(`${num} x ${multiplier[n]} = ${num*multiplier[n]}`);
    text.innerHTML= `
    <p>Tabla de multiplicar del ${num}</p>
    <p class="answer">${num} x ${multiplier[0]} = ${num*multiplier[0]}<br>
    ${num} x ${multiplier[1]} = ${num*multiplier[1]}<br>
    ${num} x ${multiplier[2]} = ${num*multiplier[2]}<br>
    ${num} x ${multiplier[3]} = ${num*multiplier[3]}<br>
    ${num} x ${multiplier[4]} = ${num*multiplier[4]}<br>
    ${num} x ${multiplier[5]} = ${num*multiplier[5]}<br>
    ${num} x ${multiplier[6]} = ${num*multiplier[6]}<br>
    ${num} x ${multiplier[7]} = ${num*multiplier[7]}<br>
    ${num} x ${multiplier[8]} = ${num*multiplier[8]}<br>
    ${num} x ${multiplier[9]} = ${num*multiplier[9]}</p>
    `;
  } 
}