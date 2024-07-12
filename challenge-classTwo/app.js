//Desafio 2
// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

//punto 1
function pointOne() {
    function greet(){
        let text = console.log('hola mundo');
    }
    return greet();
  }

//punto 2
function pointTwo() {
    function hello(){
        let userName = prompt('Digite su nombre, por favor');
        console.log(`hola, ${userName}`);
    }
    return hello();
  }

//punto 3
function pointThree() {
    function doubleNum(){
      let num = parseInt(prompt('Digite un número para devolver el doble de este.'));
      return console.log(`El doble del numero ${num} es ${num+num}`);
    }
    return doubleNum();
  }

//punto 4
function pointFour() {
    function tripleNum(){
      let a = parseInt(prompt('Digite un primer número'));
      let b = parseInt(prompt('Continue con un segundo número'));
      let c = parseInt(prompt('Finalize con el tercer número'));
      console.log(`El promedio de los números ${a}, ${b}, ${c} es ${(a+b+c)/3}`);  
    }
    return tripleNum();
  }

//punto 5
function pointFive() {
    function majorNum(){
      let a = parseInt(prompt('Digite un número'));
      let b = parseInt(prompt('Digite otro número'));
      
      if(a > b){
        console.log(`${a} es el número mayor entre ${a} y ${b}`);  
      } else {
        console.log(`${b} es el número mayor entre ${a} y ${b}`);
      }
    }
    return majorNum();
  }

//punto 6
function pointSix() {
    function multiplierNum(num){
      num = prompt('Digite un número que será multiplicado por si mismo');
      return console.log(`Cuando se multiplica ${num} por si mismo el resultado es ${num*num}`);
    }
    return multiplierNum();
  }