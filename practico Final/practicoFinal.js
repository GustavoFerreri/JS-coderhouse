// Calculo de un plazo fijo

// Solicitamos los datos al usuario
// let montoInvertido = parseInt(prompt("Ingrese el monto invertido: $"));
// let interesAnual = parseInt(prompt("Ingrese el interes anual (TNA) en %: "));
// let plazo = parseInt(prompt("Ingrese el plazo en dias: "));

// Establecemos el periodo anual en dias
const anno = 360;
// Creamos una variable global que contenga todos los pf que agreguemos
let cuentaPlazoFijo = [];

/*
    Objeto plazoFijo

    - Para el practico de simulacion, se establecio la clase
    - Tras eso se le aplicaron distintos metodos para que funcionara segun los establecida
    - [practico 7, 8, 9] en la actualidad modificamos propiedades y metodos para que tenga relacion temporal, 
    adjuntando el valor cuenta que podria ser una id de referencias
    
*/
class plazoFijo{

    /* 
        Establecemos el momento exacto donde se carga la orden tomando la fecha actual, 
        de esta manera corregimos un error que nos arrojaba modificando en cada carga la fecha
        quitamos el formateo para que de la fecha sin procesar, y la colocamos como ambito privado utilizando 
    */
    #fechaPf = new Date(Date.now());

    // Construimos el objeto con los datos del plazo fijo
    constructor(cuenta, montoInvertido, interesAnual, plazo) {
        //Agregamos la propiedad cuenta la cual nos va a permitir identificar quien realizo la operacion
        this.cuenta = cuenta;
        this.montoInvertido = montoInvertido;
        this.interesAnual = interesAnual;
        this.plazo = plazo;
    }

    // calculamos Tasa mensual en base a la tasa nominal anual (TNA)
    interesMensual() {
        return this.interesAnual*(this.plazo/anno);
    }

    // Calculamos la Tasa Efectiva Anual (TEA) tomando los datos del objeto
    tasaEfectivaAnual() {
        return (((1 + (this.interesMensual()/100)) ** (anno/this.plazo) - 1)*100).toFixed(2);
    }

    // Calculamos el monto percibido en el periodo
    interesMensualPercibido() {
        return parseFloat(this.montoInvertido*this.interesMensual()/100);
    }

    // Muestra las fechas
    mostrarFecha() {
        return this.formatoFecha(this.#fechaPf);
    }

    // Calculamos el total percibido
    totalPercibido() {
        return this.montoInvertido+this.interesMensualPercibido();
    }

    // Metodo para formatear la fecha
    formatoFecha(dia, formato = 'dd/mm/yyyy') {
        const map = {
            dd: dia.getDate(),
            mm: dia.getMonth() + 1,
            yy: dia.getFullYear().toString().slice(-2),
            yyyy: dia.getFullYear()
        }
        return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
    }

    // Realizamos una modificacion en el metodo puntual para que tome la variable privada, y devuelva la fecha en formato
    plazoCierre() {
        let fecha = new Date(this.#fechaPf);
        fecha.setDate(fecha.getDate() + this.plazo);
        return this.formatoFecha(fecha);
    }
}

// Funcion para crear filas
function crearTabla(datosTabla) {
    var cuerpoTabla = document.getElementById('resultado');
    // limipiamos la tabla, para cargar los nuevos elementos
    cuerpoTabla.innerHTML = '';
    datosTabla.forEach(function (datosFilas) {
        var fila = document.createElement('tr');
        datosFilas.forEach(function (datosCeldas) {
            var celda = document.createElement('td');
            celda.appendChild(document.createTextNode(datosCeldas));
            fila.appendChild(celda);
        });
        cuerpoTabla.appendChild(fila);
    });
}

// Funcion para ordenar los datos
function ordenarArrays(opcion) {
    cuentaPlazoFijo.sort((a, b) => {
        if (a[opcion] < b[opcion]) {
            return -1;
        }
        if (a[opcion] > b[opcion]) {
            return 1;
        }
        return 0;
    });
    crearTabla(cuentaPlazoFijo);
    M.toast({
        html: 'Ordenamos'
    });
}

// Mostramos los resultados por pantalla
function showResult() {
    /* 
        creamos el objeto con los datos del plazo fijo, tomando los datos del formulario 
        Establecemos un control de formulario.-
    */
    if (document.getElementsByName('cuenta')[0].value != '' &&
        document.getElementsByName('monto')[0].value != '' &&
        document.getElementsByName('interes')[0].value != '' &&
        document.getElementsByName('plazo')[0].value != '') {
        let usrPf = new plazoFijo(
            parseInt(document.getElementsByName('cuenta')[0].value),
            parseInt(document.getElementsByName("monto")[0].value),
            parseInt(document.getElementsByName("interes")[0].value),
            parseInt(document.getElementsByName("plazo")[0].value)
        );

        // Agregamos el objeto al array
        cuentaPlazoFijo.push([
            usrPf.cuenta,
            usrPf.mostrarFecha(),
            "$" + usrPf.montoInvertido,
            usrPf.plazo,
            usrPf.interesAnual.toFixed(2) + "%",
            usrPf.tasaEfectivaAnual() + "%",
            usrPf.plazoCierre(),
            "$" + usrPf.totalPercibido().toFixed(2)
        ]);

        // Mostramos los resultados por pantalla
        // Primero cargamos el objetivo de los datos
        crearTabla(cuentaPlazoFijo);
        M.toast({
            html: 'Plazo fijo cargado'
        });

        // Mostramos por consola
        console.log("Fecha: " + usrPf.mostrarFecha());
        console.log("Se invirtio: $" + usrPf.montoInvertido);
        console.log("En un plazo de " + usrPf.plazo + " dias");
        console.log("La tasa anual nominal (TNA) es: " + usrPf.interesAnual.toFixed(2) + "%");
        console.log("La tasa anual efectiva (TEA) es: " + usrPf.tasaEfectivaAnual() + "%");
        console.log("El interes mensual percibido es: $" + usrPf.interesMensualPercibido().toFixed(2));
        console.log("Fecha destino: " + usrPf.plazoCierre());
        console.log("El total percibido en el periodo es: $" + usrPf.totalPercibido().toFixed(2));
    } else {
        // Mensaje de error y focus sobre el primer elemento
        M.toast({
            html: 'Debe completar todos los campos'
        });
        document.getElementsByName('cuenta')[0].focus();
    }
}