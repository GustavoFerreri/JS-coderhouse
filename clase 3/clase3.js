// Repaso
// clases anteriores





// Clase 3 Bucles
// Empezamos con el bucle for
// Por convencion el bucle for se escribe asi, con la variable i y j como parametros, o nomenclatura convencional
for(let i = 0; i < 10; i++){
    console.log(i);
}
// En clase propuso
for(let i = 0; i < 10; i = i + 1){
    console.log(i);
}
// Utilizando dos cosas, prompt y el indice
for(let i = 0; i < 10; i = i + 1){
    let numero = prompt("Introduce un numero");
    console.log('El numero ingresado: '  + numero + ' es el numero: ' + i);
}

// El bucle for, es un bucle que tiene un rango de valores finito
// El bucle while, es un bucle que tiene un rango de valores infinito
// El bucle do while, es un bucle que tiene un rango de valores infinito, pero tiene una condicion de salida
// El bucle for in, es un bucle que se utiliza para recorrer un objeto
// El bucle for of, es un bucle que se utiliza para recorrer un objeto
// El bucle for each, es un bucle que se utiliza para recorrer un objeto

// Le agregamos condicional al bucle for
for (i = 0; i < 3; i++){
    let nombreAlumno = prompt("Introduce el nombre del alumno");
    let edadAlumno = parseInt(prompt("Introduce la edad del alumno"));
    // Agregamos condicionales
    if (edadAlumno >= 18 && edadAlumno < 99){
        console.log("Anotado en la nocturna");
        console.log("El alumno es: " + nombreAlumno + " y tiene: " + edadAlumno + " años");
    } else if (edadAlumno >= 99){
        console.log("Te graduaste de la vida");
        break;
    } else {
        console.log("Anotado en la mañana");
        console.log("El alumno es: " + nombreAlumno + " y tiene: " + edadAlumno + " años");
    }
    console.log(i);
}

// Usamos While
// En el caso practico usamos usr pass
// tendra 3 intentos
// en caso de ingreso correcto mensaje de bienvenida
// en caso de ingreso incorrecto mensaje de error y finalizamos el while
let usr = "admin";
let pass = "1234";
let intentos = 0;
while (intentos < 3){
    // Solicitamos el usr y pass
    let usrIngresado = prompt("Ingrese usuario");
    let passIngresado = prompt("Ingrese password");
    // verificamos si son iguales
    if (usrIngresado == usr && passIngresado == pass){
        console.log("Bienvenido");
        break;
    } else {
        console.log("Usuario o password incorrecto");
        intentos++;
    }
}
// Alternativa con for
let usr2 = "admin";
let pass2 = "1234";
let intentos2 = 3;
for (let i = 0; i < intentos2; i++){
    // Solicitamos el usr y pass
    let usrIngresado = prompt("Ingrese usuario");
    let passIngresado = prompt("Ingrese password");
    // verificamos si son iguales
    if (usrIngresado == usr2 && passIngresado == pass2){
        console.log("Bienvenido");
        break;
    } else {
        console.log("Usuario o password incorrecto");
        // Verificamos si es el ultimo intento
        if (i == intentos2 - 1){
            console.log("usr bloqueado");
            break;
        }    
    }
}