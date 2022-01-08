const anno = 360;
let cuentaPlazoFijo = [];
let ID_ORDEN = 1;
const BASE_URL = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

class plazoFijo {
    #fechaPf = new Date(Date.now());
    constructor() {
        let inputs = inputValue();
        this.idOrden = ID_ORDEN++;
        this.cuenta = parseInt(inputs[0]);
        this.montoInvertido = parseInt(inputs[1]);
        this.interesAnual = parseInt(inputs[2]);
        this.plazo = parseInt(inputs[3]);
    }
    interesMensual = () => this.interesAnual * (this.plazo / anno);
    tasaEfectivaAnual = () => (((1 + this.interesMensual() / 100) ** (anno / this.plazo) - 1) * 100).toFixed(2);
    interesMensualPercibido = () => parseFloat((this.montoInvertido * this.interesMensual()) / 100);
    mostrarFecha = () => this.formatoFecha(this.#fechaPf);
    totalPercibido = () => this.montoInvertido + this.interesMensualPercibido();
    formatoFecha(dia, formato = 'dd/mm/yyyy') {
        const map = {
            dd: dia.getDate(),
            mm: dia.getMonth() + 1,
            yy: dia.getFullYear().toString().slice(-2),
            yyyy: dia.getFullYear(),
        };
        return formato.replace(/dd|mm|yyyy/gi, (matched) => map[matched]);
    }
    plazoCierre() {
        let fecha = new Date(this.#fechaPf);
        fecha.setDate(fecha.getDate() + this.plazo);
        return this.formatoFecha(fecha);
    }
}

const crearTabla = (datosTabla) => {
    var cuerpoTabla = document.getElementById('resultado');
    cuerpoTabla.innerHTML = '';
    datosTabla.forEach((datosFilas) => {
        var fila = document.createElement('tr');
        var btnDel = document.createElement('a');
        with (btnDel) {
            className = 'btn btn-danger btn-sm';
            addEventListener('click', eliminarElemento);
            appendChild(document.createTextNode('x'));
        }
        datosFilas.forEach((datosCeldas) => {
            var celda = document.createElement('td');
            celda.appendChild(document.createTextNode(datosCeldas));
            fila.appendChild(celda);
        });
        var celda = document.createElement('td');
        celda.appendChild(btnDel);
        fila.appendChild(celda);
        cuerpoTabla.appendChild(fila);
    });
};

// A trabajar respuesta en msj
const eliminarElemento = (e) => {
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let cuenta = padre.querySelector('td').textContent;
    let index = cuentaPlazoFijo.findIndex((elemento) => elemento[0] == cuenta);
    cuentaPlazoFijo.splice(index, 1);
    msgBox(`Se elimino la Orden id ${cuenta}`);
    crearTabla(cuentaPlazoFijo);
    $('#exampleModalCenter').modal('hide')
};

const ordenarArrays = (opcion) => crearTabla(cuentaPlazoFijo.sort((a, b) => parseInt(a[opcion]) - parseInt(b[opcion]) ));

const inputValue = () => $('input').map((index, input) => $(input).val() != '' && $(input).val());

const evaluarpf = () => {
    let ingresos = inputValue();
    if (ingresos.filter((index, val) => val == false).length == 0) {
        msgBox(ingresos);
    } else {
        msgBox('Debe completar todos los campos');
    }
};

const agregarPf = () => {
    let usrPf = new plazoFijo();
    with (usrPf) {
        cuentaPlazoFijo.push([
            idOrden,
            cuenta,
            mostrarFecha(),
            '$' + montoInvertido,
            plazo,
            interesAnual.toFixed(2) + '%',
            tasaEfectivaAnual() + '%',
            plazoCierre(),
            '$' + totalPercibido().toFixed(2),
        ]);
    }
    crearTabla(cuentaPlazoFijo);
    $('#exampleModalCenter').modal('hide');
}

// Como resolver cuando el mensaje parte de eliminar o de otra zona de la web
const msgBox = (txt) => {
    let texto = txt;
    let button = 
        `<button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>`;
    if (typeof texto == 'object') {
        texto = 
            `<h4>Conformacion Plazo Fijo</h4>
            <p>Usted esta por colocar</p>
            Número de cuenta:   <strong>${txt[0]}</strong><br>
            Monto invertido:    <strong>$${txt[1]}</strong><br>
            Tasa anual:         <strong>${txt[2]}%</strong><br>
            Renta del periodo:  <strong>$${parseFloat(txt[1]*(txt[2]/100)*(txt[3]/360)).toFixed(2)}</strong><br>
            Plazo:              <strong>${txt[3]}</strong>`;
        button =
            `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="addData" onclick="agregarPf();">Add</button>`;
    } 
    if(texto.indexOf('eliminar')!=-1){
        button=
            `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" id="delData" onclick="console.log(res(){return true;});">Del</button>`;
    }
    document.getElementById('modal').innerHTML=texto;
    document.getElementById('actionModal').innerHTML=button;
    $('#exampleModalCenter').modal('show');
};

const fetchCallback = (url = BASE_URL, callback) => fetch(url).then((res) => res.json()).then(callback);

const filtrar = (nombreBuscado) => 
    (listadoMonedas) => listadoMonedas.find((moneda) => moneda.casa.nombre.toLowerCase() === nombreBuscado.toLowerCase());

const getMoneda = (nombre, callback, url = BASE_URL) => fetchCallback(url, filtrar(nombre)).then(callback);

const incluirValor = (nombre) =>
    getMoneda(nombre, (valor) => {
        let texto = document.createElement('span');
        texto.innerHTML = `<strong> ${valor.casa.nombre} </strong>
                            <span class='text-danger'><small>venta</small> ${valor.casa.venta}</span>
                            <span class='text-success'><small>compra</small> ${valor.casa.compra}</span>`;
        document.getElementById('destinoValor').appendChild(texto);
});

const cleanForm = () => document.querySelectorAll('input').forEach(input=> $(input).val(''));

$(window).ready(() => {
    incluirValor('Dolar oficial');
    incluirValor('Dolar blue');
    $('#btnCalc').click( () =>{
        let ingresos = inputValue();
        if (ingresos.filter((index, val) => val == false).length == 0) {
            msgBox(ingresos);
        } else {
            msgBox('Debe completar todos los campos');
        }
    });
    $('#btnClean').click( () => cleanForm());
    $('#btnReload').click( () => location.reload());
    $('#exampleModalCenter').modal('hide');
});