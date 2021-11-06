// Array o arreglos

// let frutas = ["fruta1", "fruta2", "fruta3", "fruta4", "fruta5"];
// console.log(frutas);

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros);  

// let mix = ["fruta1", 1, "fruta2", 2, "fruta3", 3, "fruta4", 4, "fruta5", 5];
// console.log(mix);

// // El metodo push es para agregar al final un nuevo elemento

// let alumnosCoder = ["Juan", "Pedro", "Maria", "Jorge", "Luis"];
// console.log(alumnosCoder);

// // Agregamos un elemento al final
// alumnosCoder.push("Federico");
// console.log(alumnosCoder);

// // Para elminar el ultimo elemento usamos pop()
// alumnosCoder.pop();
// console.log(alumnosCoder);

// // Metodo Shift() para eliminar el primer elemento
// alumnosCoder.shift();
// console.log(alumnosCoder);

// // Unshift() para agregar un elemento al inicio
// alumnosCoder.unshift("Juan");
// console.log(alumnosCoder);

// console.log("-------------------------------------");

// // to string para pasar el array a cadena
// console.log(alumnosCoder.toString());
// // metodo join para unir entre elementos de un array a traves de un caracter
// console.log(alumnosCoder.join(" - "));

// // El arreglo se va ha utilizar para guardar listas unidemensionales
// //  El objeto se utiliza para...

// // Ultimo tema slice, es dende hasta veremos el array
// let algunosALumnos = alumnosCoder.slice(1, 3);
// console.log(algunosALumnos);

// // Nested array
// let compra = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(compra[0][1]);



// class perritos {
//     constructor(nombre, duennio) {
//         this.nombre = nombre;
//         this.duennio = duennio;
//     }

// }

// creamos una clase perro ver2
// let perritos2= [
//     {
//         nombre: "Pelusa",
//         edad: 2,
//         raza: "Labrador"
//     },
//     {
//         nombre: "Peluche",
//         edad: 4,
//         raza: "Pastor Aleman"
//     },
// ]
// console.log(perritos2);

// Pero esta no es la mejor manera de crear un array de objetos
// for(let i = 0; i < perritos2.length; i++){
//     console.log(perritos2[i].nombre);
// }
// Mejoramos muchos la situacion
// let grupoDeperritos=[];

// for(let i = 0; i < 3; i++){
//     let nombre = prompt("Ingrese el nombre del perro");
//     let nombreDuennio = prompt("Ingrese el nombre del duennio");
//     // convinamos array con objetos
//     grupoDeperritos.push(new perritos(nombre, nombreDuennio));
// }
// console.log(grupoDeperritos);
// // Mostramos cada perro de perritos, con un for
// for(let perrito of grupoDeperritos){
//     console.log(perrito.nombre);
//     console.log(perrito.duennio);
// }

// // quedan tres elementos, find, map, filter
// find()


/* Crear una clase usuario: nombre, dni, edad */
/* 2da vienen a votar 5 usr solo pueden votar mayores, resgitras solo los mayores */

// Colocamos un array con los votantes
let votantes=[]

class usuario {
    // Propiedades
    constructor(nombre, dni, edad) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
    }
    // metodo para determinar si es mayor de edad
    mayorDeEdad = function(){
        if(this.edad >= 18){
            return true;
        }else{
            return false;
        }
    }
}
// Variacion del codigo puesto solicita se carguen en el array todos los 5 votantes
for (i = 0; i < 5; i++) {
    let nombre = prompt("Ingrese el nombre del usuario");
    let dni = prompt("Ingrese el dni del usuario");
    let edad = prompt("Ingrese la edad del usuario");
    votantes.push(new usuario(nombre, dni, edad));
}
// Aqui filtramos los votantes mayores de edad
for (i = 0; i < votantes.length; i++) {
    if (votantes[i].mayorDeEdad()) {
        console.log(votantes[i].nombre);
    }
}