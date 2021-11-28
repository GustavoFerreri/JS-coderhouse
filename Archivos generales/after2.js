

/* Pedir dos numeros por teclado, realizar la suma: definir 
si la misma es mayor,menor o igual a 100*/

/*
let a = prompt("Ingrese un numero");
let b = prompt("Ingrese otro numero");

a = parseInt(a);
b = parseInt(b);


let suma = a + b;


if( suma > 100){
    console.log(suma + " Es mayor que 100")
}
else if( suma < 100 ){
    console.log(suma + " Es menor que 100")

}
else{
    console.log(suma + " Es igual que 100")

}

*/

/* Pedir tres numeros por teclado, definir cual es el mayor de los 3*/


let a = prompt("Ingrese un numero");
let b = prompt("Ingrese otro numero");
let c = prompt("Ingrese otro numero mas");


if( a > b && a > c){
    console.log("A es el mayor");

}
else if( b > a && b > c){
    console.log("B es el mayor");
}
else{
    console.log("C es el mayor");
}




/*Crear un programa para un cine: Peliculas +13 podran ingresar usuario mayores de 13
o si son menores debera asistir con tutor*/
/* Se pide por teclado la edad y si viene con tutor*/

let edad = parseInt(prompt("Ingrese su edad"));
let tutor = prompt("Tutor: Si | No");

if( edad >= 13){

    console.log("Puede ingresar");
}
else if( tutor == "Si"){

    console.log("Puede ingresar");
}
else{
    console.log("No puede ingresar a la sala");
}






let dia = prompt("Ingrese el dia");
let monto = prompt("Ingrese el precio");
let feriado = prompt("Es feriado: Si | No");
let precioFinal;


if( dia == "Martes"){

    precioFinal = monto - (monto*0.12);

}
else if( dia == "Sabado" ){
    if( feriado == "Si"){
        precioFinal = monto - (monto*0.25);


    }
    else{

        precioFinal = monto - (monto*0.18);

    }


}
else{

    console.log("No tiene descuento");
}
