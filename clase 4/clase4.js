// Funciones
// Busca retutilizacion de codigo
// Codigo mas legible
// codigo mas limpio
// codigo mas ordenado

// empezamos a probar funciones
function saludar() {
    console.log("Hola");
}
// Llamamos a la funcion
saludar();

// Function suma dos variables
function sumar(a, b) {
    return a + b;
}
// Tomamos los numeros a sumar
let num = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
// mostramos por consola el resultado de la suma
console.log('El total de la suma de: ' + num + ' y ' + num2 + ' es: ' + sumar(num, num2));