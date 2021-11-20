/*
    Hoy veremos STORAGE
    Almacenamiento de datos de manera local
    dos tipos de almacenamineto local y session
*/


/*
Local Storage
metodo -> localstorge.setitem(clave, valor)
clave -> string
valor -> string, number, boolean, object, array
Soporta el cierre de la pagina
let nombreUsuario = "Maxi";
let nombreUsuario2 = "Maxi2";
localStorage.setItem("nombreUsuario", nombreUsuario);
localStorage.setItem("nombreUsuario2", nombreUsuario2);

let resultado = localStorage.getItem("nombreUsuario");
console.log(resultado);
console.log(typeof resultado);
*/ 

/*
    session Storage
    ojo es un almacenamiento de datos que se elimina al cerrar el navegador
    Ideal para una sesion de trabajo
    for(let i = 0; i< localStorage.length; i++){
        let clave = localStorage.key(i);
        console.log(clave);
        console.log(localStorage.getItem(clave));
    }
*/
/*
    let usuario = {nombre: "Maxi", edad: 30, perro: "Cope"};
    // Si lo cargamos de la siguiente manera, nos pasa el objeto a string y bye datos
    // localStorage.setItem("usuario", usuario);
    // Para solucionarlo usamos JSON.stringify que trasnforma el objeto en un string\
    // para transformarlo nuevamente usamos parse()
    let usuarioJson = JSON.stringify(usuario);
    console.log(usuarioJson);
    console.log(typeof usuarioJson);
    console.log(typeof usuario);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("usuarioJSON", usuarioJson);


    //  JSON => javascript object notation
    // Basado en texto plano

    let enJSON = localStorage.getItem("usuarioJSON");
    console.log(enJSON);
    console.log(typeof enJSON);
    let resultadoParse = JSON.parse(enJSON);
    console.log(resultadoParse);
*/

function cargarVotantes(){
    let dni = prompt("¿Cual es tu dni?");
    let voto = prompt("¿Que opcion eliges?");
    localStorage.setItem(dni, voto);
}

function resultados(){
    let votoA = 0;
    let votoB = 0;
    let nulos = 0;
    for(let i = 0; i< localStorage.length; i++){
        let clave = localStorage.key(i);
        if (localStorage.getItem(clave).toUpperCase() == "A"){
            votoA++;
        } else if (localStorage.getItem(clave).toUpperCase()  == "B"){
            votoB++;
        } else {
            nulos++;
        }
    }
    console.log("Votos A: " + votoA);
    console.log("Votos B: " + votoB);
    console.log("Votos Nulos: " + nulos);
}