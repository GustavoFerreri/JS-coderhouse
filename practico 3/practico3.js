// decalaramos la variables
let suma = 0;
// Abrimos un bucle infinito cuyo control lo realizaremos dentro del bucle
while (true){
    let num = prompt('Ingrese un numero que vamos a sumar');
    //Evsaluamos si el ingreso no es un numero a sumar, y si se esta dando salida del bucle
    if(num == 'ESC'){
        break;
    }
    // Realizamos la suma
    suma += parseInt(num);
}
//Muestra el resultado por pantalla
console.log('La suma de los numeros ingresados es: ' + suma);