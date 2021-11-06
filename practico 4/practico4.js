// Calculo de un plazo fijo

// Solicitamos los datos al usuario
let montoInvertido = parseInt(prompt("Ingrese el monto invertido: $"));
let interesAnual = parseInt(prompt("Ingrese el interes anual (TNA) en %: "));
let plazo = parseInt(prompt("Ingrese el plazo en dias: "));

// Establecemos el periodo anual en dias
const anno = 360;

// Tasa mensual (TNA)
function interesMensual(interesAnual, plazo) {
    return interesAnual*(plazo/anno);
}

// Tasa efectiva anual (TEA)
function tasaEfectivaAnual(interesAnual, plazo) {
    return (((1 + (interesMensual(interesAnual, plazo)/100)) ** (anno/plazo) - 1)*100).toFixed(2);
}

// Interes mensual percibido
function interesMensualPercibido(montoInvertido, interesAnual, plazo) {
    return parseFloat(montoInvertido*interesMensual(interesAnual, plazo)/100);
}

// Total percibido en el periodo
function totalPercibido(montoInvertido, interesAnual, plazo) {
    return montoInvertido+interesMensualPercibido(montoInvertido, interesAnual, plazo);
}

// Mostramos los resultados por pantalla
console.log("Se invirtio: $" + montoInvertido);
console.log("En un plazo de " + plazo + " dias");
console.log("La tasa anual nominal (TNA) es: " + interesAnual.toFixed(2)  + "%");
console.log("La tasa anual efectiva (TEA) es: " + tasaEfectivaAnual(interesAnual, plazo) + "%");
console.log("El interes mensual percibido es: $" + interesMensualPercibido(montoInvertido, interesAnual, plazo).toFixed(2));
console.log("El total percibido en el periodo es: $" + totalPercibido(montoInvertido, interesAnual, plazo).toFixed(2));