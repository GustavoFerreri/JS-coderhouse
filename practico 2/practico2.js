// Presentamos mensaje por pantalla
alert('Vamos a ver si sos mayor de edad')

// Solicitamos al usr ingrese su edad
let edadUsr = parseInt(prompt('Ingrese su edad: '))

// Evaluamos la edad del cliente, y mostramos por pantalla si es o no mayor
if (edadUsr>= 18){
    alert('Es mayor de edad');
}else{
    alert('Eres menor de edad');
}
