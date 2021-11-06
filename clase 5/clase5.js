// Clase 5: objetos
// Las variables dentro de un objeto es uan propiedad del mismo
// Las funciones asociadas son metodos del objeto

// Datos sueltos
let nombre = "Juan";
let edad = 30;
let nota = 10;

// Datos agrupados
let alumnoCoder = {
    nombre: "Juan",
    edad: 30,
    nota: 10,
};

// La limitacion es por que cada dato agrupado, u objeto, es que hay que declarar cada elemento de forma literal

// Ahora mostramos por pantalla
// para ello tenemos que acceder a cada uno veamos
console.log(nombre, edad, nota);
console.log(alumnoCoder);

// Para acceder a cada propiedad usamos "dot notation"
console.log(alumnoCoder.nombre, alumnoCoder.edad, alumnoCoder.nota);

// Hoy se utiliza mucho la poo y la pf

/* FIN DE OBJETOS LITERALES */

// mostramos la creacion de un objeto, literal, el tema es en el caso de ejemplo la limitacion a lo que la funcion for
// for (let i = 0; i < 10; i++) {
//     let nombre = prompt("Ingrese su nombre");
//     let apellido = prompt("Ingrese su edad");
    
//     let usuarioCoder = {
//         nombre: nombre,
//         apellido: apellido,
//     };
// }

/* OBJETOS CON CONSTRUCTOR */

function peliculas(titulo, director, duracion, fecha) {
    // en este caso this cumple o hace referencia a esta instancias
    this.titulo = titulo;
    this.director = director;
    this.duracion = duracion;
    this.fecha = fecha;
}
function showMovie(nombre) {
    console.log("Nombre de la pelicula: " + nombre.titulo);
    console.log("Director de la pelicula: " + nombre.director);
    console.log("Duracion de la pelicula: " + nombre.duracion);
    console.log("Fecha de la pelicula: " + nombre.fecha);
}

// Cargamos un objeto de ejemplos
let titanic = new peliculas("Titanic", "James Cameron", 195, "2012");
let matrix = new peliculas("Matrix", "Wachowski", 195, "2012");

// Mostramos por pantalla, a travez de una funcion destinada para mostrar
showMovie(titanic);
showMovie(matrix);

// El problema d esto es que paera cada objeto deberiamos de crear una nueva variable

// Lo que se deberia de obtener es una forma de que sea dinamica 

// Mejoramos el objeto, modificamos el objeto con duenio, y edad
function gatito(nombre, duennio, edad) {
    // Propiedad
    this.nombre = nombre;
    this.duennio = duennio;
    this.edad = edad;

    // Metodo
    this.saludar = function(){
        console.log(this.nombre + "Miauu");
    }
    this.edadGatuna = function(){
        console.log(this.nombre + " tiene " + (this.edad * 7) + " años");
    }
}

let bolaDeNieve = new gatito("Bola de Nieve", "lisa", 5);
let donGato = new gatito("Don gato");

donGato.saludar();


// Crear clase videojuegos datos: nombre, genero, desarrollador, precio, clasificacion, stock

class videJuegos{
    constructor(nombre, desarrollador, precio, clasificacion, stock){
        this.nombre = nombre;
        this.desarrollador = desarrollador;
        this.precio = precio;
        this.clasificacion = clasificacion;
        this.stock = stock;
    }
    precioFinal(){
        return this.precio * 1.21;
    }
}