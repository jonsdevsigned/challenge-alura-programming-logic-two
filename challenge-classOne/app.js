//DESAFIO 1
// 1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

// 2.Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

// 3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

// 4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

// 5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

//punto 1
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

 //punto 2
function consoleMessage() {
  console.log("El boton fue clicado");
}

//punto 3
function promptMessage() {
  let city = prompt("Nombre una ciudad de Brasil");

  alert(`Estuve en ${city} y me acordé de ti`);
}

//punto 4
function alertMessage() {
  alert("Yo amo JS");
}

//punto 5
function addNum() {
  let num1 = parseInt(prompt("Primer número a sumar"));
  let num2 = parseInt(prompt("Segundo número a sumar"));
  let result = num1 + num2;

  alert(`La suma de ${num1} y ${num2} es: ${result}`);
}