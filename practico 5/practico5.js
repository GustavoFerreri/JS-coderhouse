// Calculo de un plazo fijo

// Solicitamos los datos al usuario
// let montoInvertido = parseInt(prompt("Ingrese el monto invertido: $"));
// let interesAnual = parseInt(prompt("Ingrese el interes anual (TNA) en %: "));
// let plazo = parseInt(prompt("Ingrese el plazo en dias: "));

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
function showResult() {

    // tomamos los valores de los inputs
    let montoInvertido = parseInt(document.getElementsByName("monto")[0].value);
    let interesAnual = parseInt(document.getElementsByName("interes")[0].value);
    let plazo = parseInt(document.getElementsByName("plazo")[0].value);
    
    // Insertamos los resultados en el HTML
    document.getElementById("resultado").innerHTML = `
        <p>Monto invertido: $ ${montoInvertido.toFixed(2)}</p>
        <p>Interes anual nominal(TNA): ${interesAnual.toFixed(2)}%</p>
        <p>Plazo: ${plazo} dias</p>
        <p>Tasa mensual: ${interesMensual(interesAnual, plazo).toFixed(2)}%</p>
        <p>Tasa efectiva anual (TEA): ${tasaEfectivaAnual(interesAnual, plazo)}%</p>
        <p>Interes mensual percibido: $${interesMensualPercibido(montoInvertido, interesAnual, plazo).toFixed(2)}</p>
        <p>Total percibido en el periodo: $${totalPercibido(montoInvertido, interesAnual, plazo).toFixed(2)}</p>`;

    // Mostramos los resultados en la consola
    console.log("Se invirtio: $" + montoInvertido);
    console.log("En un plazo de " + plazo + " dias");
    console.log("La tasa anual nominal (TNA) es: " + interesAnual.toFixed(2)  + "%");
    console.log("La tasa anual efectiva (TEA) es: " + tasaEfectivaAnual(interesAnual, plazo) + "%");
    console.log("El interes mensual percibido es: $" + interesMensualPercibido(montoInvertido, interesAnual, plazo).toFixed(2));
    console.log("El total percibido en el periodo es: $" + totalPercibido(montoInvertido, interesAnual, plazo).toFixed(2));
}