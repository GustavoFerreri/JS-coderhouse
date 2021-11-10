// Calculo de un plazo fijo

// Solicitamos los datos al usuario
// let montoInvertido = parseInt(prompt("Ingrese el monto invertido: $"));
// let interesAnual = parseInt(prompt("Ingrese el interes anual (TNA) en %: "));
// let plazo = parseInt(prompt("Ingrese el plazo en dias: "));

// Establecemos el periodo anual en dias
const anno = 360;

// Debemos Aplicar objetos en JS
// Objeto plazoFijo
class plazoFijo{
    // Construimos el objeto con los datos del plazo fijo
    constructor(montoInvertido, interesAnual, plazo) {
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
    // Calculamos el total percibido
    totalPercibido() {
        return this.montoInvertido+this.interesMensualPercibido();
    }
}

// Mostramos los resultados por pantalla
function showResult() {   

    // creamos el objeto con los datos del plazo fijo, tomando los datos del formulario
    let usrPf = new plazoFijo(
        parseInt(document.getElementsByName("monto")[0].value), 
        parseInt(document.getElementsByName("interes")[0].value), 
        parseInt(document.getElementsByName("plazo")[0].value)
        );

    // Insertamos los resultados en el HTML, en este caso implementando Objetos
    document.getElementById("resultado").innerHTML = `
        <p>Monto invertido: $ ${usrPf.montoInvertido.toFixed(2)}</p>
        <p>Interes anual nominal(TNA): ${usrPf.interesAnual.toFixed(2)}%</p>
        <p>Plazo: ${usrPf.plazo} dias</p>
        <p>Tasa mensual: ${usrPf.interesMensual().toFixed(2)}%</p>
        <p>Tasa efectiva anual (TEA): ${usrPf.tasaEfectivaAnual()}%</p>
        <p>Interes mensual percibido: $${usrPf.interesMensualPercibido().toFixed(2)}</p>
        <p>Total percibido en el periodo: $${usrPf.totalPercibido().toFixed(2)}</p>`;

    // Mostramos los resultados en la consola
    console.log("Se invirtio: $" + usrPf.montoInvertido);
    console.log("En un plazo de " + usrPf.plazo + " dias");
    console.log("La tasa anual nominal (TNA) es: " + usrPf.interesAnual.toFixed(2)  + "%");
    console.log("La tasa anual efectiva (TEA) es: " + usrPf.tasaEfectivaAnual() + "%");
    console.log("El interes mensual percibido es: $" + usrPf.interesMensualPercibido().toFixed(2));
    console.log("El total percibido en el periodo es: $" + usrPf.totalPercibido().toFixed(2));
}