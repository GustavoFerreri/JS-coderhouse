/*
function calcularIntereses(monto , cuotas){
    let interes;
    if( cuotas == 3){
        interes = monto * 0.10;
        return interes
    }
    else if( cuotas == 6){
        interes = monto * 0.30;
        return interes

    }
    else if( cuotas == 12){
        interes = monto * 0.50;
        return interes

    }
}


function iva( monto ){
    monto = monto*0.21;
    return monto
}

let monto = parseInt(prompt("Ingrese el monto deseado"));
let cuotas = prompt("Ingresa la cantidad de cuotas: 3 / 6 / 12 ");


let precioTotal = monto + calcularIntereses( monto , cuotas ) + iva(monto);

alert(precioTotal);

let producto = prompt("Que quiere comrprar?");
let carrito;

while(producto != ""){
    
    carrito = producto;


}


*/



for( let i = 0 ; i < 10 ; i = i+1){

    console.log("Hola " + i)


}


/*
let usuario = prompt("Ingrese su usuario");
while( usuario != "pepe"){
    console.log("Bienvenido/a " + usuario)
    usuario = prompt("Ingrese su usuario")


}
*/

let usuario;

do{
    usuario = prompt("Ingrese su usuario");
    console.log("Bienvenido/a " + usuario)

}while( usuario != "pepe")