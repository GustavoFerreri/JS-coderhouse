// Calculo de un plazo fijo

const anno = 360
let cuentaPlazoFijo = []
let idOrden = 1

class plazoFijo{
    #fechaPf = new Date(Date.now())
    constructor() {
        let inputs = inputValue()
        this.idOrden = idOrden++
        this.cuenta = parseInt(inputs[0])
        this.montoInvertido = parseInt(inputs[1])
        this.interesAnual = parseInt(inputs[2])
        this.plazo = parseInt(inputs[3])
    }
    interesMensual = () => this.interesAnual*(this.plazo/anno)
    tasaEfectivaAnual = () => (((1 + (this.interesMensual()/100)) ** (anno/this.plazo) - 1)*100).toFixed(2)
    interesMensualPercibido =()=> parseFloat(this.montoInvertido*this.interesMensual()/100)
    mostrarFecha = () => this.formatoFecha(this.#fechaPf)
    totalPercibido = () => this.montoInvertido+this.interesMensualPercibido()
    formatoFecha(dia, formato = 'dd/mm/yyyy') {
        const map = {
            dd: dia.getDate(),
            mm: dia.getMonth() + 1,
            yy: dia.getFullYear().toString().slice(-2),
            yyyy: dia.getFullYear()
        }
        return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
    }
    plazoCierre() {
        let fecha = new Date(this.#fechaPf)
        fecha.setDate(fecha.getDate() + this.plazo)
        return this.formatoFecha(fecha)
    }
}

crearTabla = (datosTabla) => {
    var cuerpoTabla = document.getElementById('resultado')
    cuerpoTabla.innerHTML = ''
    datosTabla.forEach(datosFilas=>{
        var fila = document.createElement('tr')
        var btnDel = document.createElement('a')
        with(btnDel){
            className = 'valign-wrapper btn-floating btn-small red'
            addEventListener('click', eliminarElemento)
            appendChild(document.createTextNode('-'))
        }
        datosFilas.forEach(datosCeldas=>{
            var celda = document.createElement('td')
            celda.appendChild(document.createTextNode(datosCeldas))
            fila.appendChild(celda)
        });
        var celda = document.createElement('td')
        celda.appendChild(btnDel)
        fila.appendChild(celda)
        cuerpoTabla.appendChild(fila)
    });
}

eliminarElemento = (e) =>{
    let hijo = e.target
    let padre = hijo.parentNode.parentNode
    let cuenta = padre.querySelector("td").textContent
    let index = cuentaPlazoFijo.findIndex(elemento => elemento[0] == cuenta)
    cuentaPlazoFijo.splice(index, 1)
    msgBox(`Se elimino la Orden id ${cuenta}`)
    crearTabla(cuentaPlazoFijo)
}

ordenarArrays = (opcion) => {   
    cuentaPlazoFijo.sort((a, b) => {
        if (a[opcion] < b[opcion]) { return -1 }
        if (a[opcion] > b[opcion]) { return 1 }
        return 0
    })
    crearTabla(cuentaPlazoFijo)
    msgBox('Ordenamos')
}

inputValue = () => {
    let inputs=[]
    $('input').each((index, input) =>{ if ($(input).val()!=''){ inputs.push($(input).val()) }})
    return inputs
}

agregarPf = () => {
    if (inputValue().length>1) {
        let usrPf = new plazoFijo()
        with (usrPf) {
            cuentaPlazoFijo.push([
                idOrden,
                cuenta,
                mostrarFecha(),
                "$" + montoInvertido,
                plazo,
                interesAnual.toFixed(2) + "%",
                tasaEfectivaAnual() + "%",
                plazoCierre(),
                "$" + totalPercibido().toFixed(2)
            ]);
        };
        crearTabla(cuentaPlazoFijo)
        msgBox('Plazo fijo cargado')
    } else {
        msgBox('Debe completar todos los campos')
    }
}

$(window).ready(()=>{
    let bluePanel = new dollarPanel('Blue', 'dollar', 'dollar.jpeg')
    bluePanel.showPanel()
    let pfPanel = new formCarga('Plazo Fijo', 'interactivePanel',
        ['cuenta', 'monto', 'interes', 'plazo'],
        ['Calcular', 'Limpiar', 'Reload'],
        'pf.jpeg')
    pfPanel.createForm()
})