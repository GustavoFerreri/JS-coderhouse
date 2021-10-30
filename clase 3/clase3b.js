// En esta parte de la clase vemos While
let usuario = 'jacinto';
let i = 0;
// primner ejemplo
while (i<10) {
    console.log('Hola' + usuario);
    i++;
}

// Ahora  realizamos el bucle While, pero con la condicion deque el nomnbre contenga la clave de salida
let usuario = prompt('Ingrese su nombre');
while (usuario == 'ESC'){
    console.log('Hola ' + usuario);
    let usuario = prompt('Ingrese su nombre');
}

// Ahora realizamos un do while, buscando que la variable sea de entorno peses a estar mal
do{
    // Aqui ponemos la variable con var para que sea "Global"
    var usuario = prompt('Ingrese su nombre');
    console.log('Hola ' + usuario);
} while (usuario != 'ESC');

// Ejercicio
/*
Crear programa para la votacion de un club
- se desconoce cuantas personas votaron
- se puede votar por el partido A y B
*/
// Inicializamos las variables
let votosA = 0;
let votosB = 0;
let votoNulo = 0;
//Determinamos la condicion de final del bucle
while(voto!='ESC'){
    let voto = prompt('Ingrese su voto por A o por B');
    //Evaluamos a quien votamos
    if (voto == 'A'){
        votosA++;
    } else if (voto == 'B'){
        votosB++;
    //Incluimos votos nulos
    } else {
        votoNulo++;
    }
}
//Mostramos por pantalla los resultados
console.log('Votos A: ' + votosA + ' votos B: ' + votosB);
console.log('Total de votos: ' + (votosA + votosB + votoNulo));
console.log('Porcentaje de votos A: ' + (votosA * 100 / (votosA + votosB + votoNulo)) + '%');
console.log('Porcentaje de votos B: ' + (votosB * 100 / (votosA + votosB + votoNulo)) + '%');