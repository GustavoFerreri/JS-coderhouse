let cuentaPlazoFijo = [];
let ID_ORDEN = 1;
let ACCOUNT = [];
const BASE_URL = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

class plazoFijo {
    #fechaPf = new Date(Date.now());
    #anno = 360;
    constructor() {
        let inputs = inputValue();
        this.idOrden = ID_ORDEN++;
        this.cuenta = parseInt(inputs[0]);
        this.montoInvertido = parseInt(inputs[1]);
        this.interesAnual = parseInt(inputs[2]);
        this.plazo = parseInt(inputs[3]);
    }
    interesMensual = () => this.interesAnual * (this.plazo / this.#anno);
    tasaEfectivaAnual = () => (((1 + this.interesMensual() / 100) ** (this.#anno / this.plazo) - 1) * 100).toFixed(2);
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
        msgInfo(`<b>Se conformo nuevo Plazo Fijo</b><br>
                cuenta: ${cuenta}<br>
                monto: $${montoInvertido}<br>
                tasa: ${interesAnual.toFixed(2)}%<br>
                vencimiento: ${plazoCierre()}<br>
                monto para acreditar: $${totalPercibido().toFixed(2)}`);
    }
    crearTabla(cuentaPlazoFijo);
}

const cargarCuenta = () =>{
    let ingresos = inputValue();
    let objSon = {'account': ingresos[0], 'accountMount': ingresos[1]}
    let indexAccount = ACCOUNT.findIndex(jsonData => jsonData['account'] == objSon['account'])
    if (indexAccount != -1){
        ACCOUNT[indexAccount]['accountMount'] = 
            parseInt(ACCOUNT[indexAccount]['accountMount']) + parseInt(objSon['accountMount']);
        msgInfo(`En la cuenta numero: <b style="color: red">${objSon['account']}</b><br> 
            se le agrega liquidez por $${objSon['accountMount']}<br>
            quedando un saldo de $${ACCOUNT[indexAccount]['accountMount']}`);
    } else { 
        ACCOUNT.push(objSon); 
        msgInfo(`En la cuenta numero: <b style="color: red">${objSon['account']}</b><br> 
            con un saldo de $${objSon['accountMount']}`);
    }
    localStorage.setItem('cuentas', JSON.stringify(ACCOUNT));
    chargeDataArray();
    crearTabla(ACCOUNT)
}

const crearTabla = (datosTabla) => {
    let cuerpoTabla = document.getElementById('resultado');
    cuerpoTabla.innerHTML = '';
    try {
        datosTabla.forEach((datosFilas) => {
            let fila = document.createElement('tr');
            let btnDel = document.createElement('a');
            with (btnDel) {
                className = 'btn btn-danger btn-sm';
                style.color = 'white';
                addEventListener('click', eliminarElemento);
                appendChild(document.createTextNode('X'));
            }
            datosFilas.forEach((datosCeldas) => {
                let celda = document.createElement('td');
                celda.appendChild(document.createTextNode(datosCeldas));
                fila.appendChild(celda);
            });
            let celda = document.createElement('td');
            celda.appendChild(btnDel);
            fila.appendChild(celda);
            cuerpoTabla.appendChild(fila);
        });
    } catch {
        for(let i = 0; i < datosTabla.length; i++){
            let fila = document.createElement('tr');
            console.log(datosTabla[i]);
            for(const [key, value] of Object.entries(datosTabla[i])){
                let celda = document.createElement('td');
                let text = value;
                if(key == 'accountMount') text = `$ ${value}`;
                celda.appendChild(document.createTextNode(text));
                fila.appendChild(celda);
            }
            cuerpoTabla.appendChild(fila);
        }
    }    
};

const eliminarElemento = (e) => {
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let cuenta = padre.querySelector('td').textContent;
    let index = cuentaPlazoFijo.findIndex((elemento) => elemento[0] == cuenta);
    cuentaPlazoFijo.splice(index, 1);
    msgInfo(`Se elimino la Orden id <b style="color: red;">${cuenta}</b>`);
    crearTabla(cuentaPlazoFijo);
};

const ordenarArrays = (opcion) => crearTabla(cuentaPlazoFijo.sort((a, b) => parseInt(a[opcion]) - parseInt(b[opcion]) ));

const inputValue = () => $('input').map((index, input) => $(input).val() != '' && $(input).val());

const evaluarpf = () => {
    let ingresos = inputValue();
    if (ingresos.filter((index, val) => val == false).length == 0) {
        msgInfo(ingresos);
    } else {
        msgInfo('Debe completar todos los campos');
    }
};

const msgInfo = (text) => {
    let destinoMsg = document.querySelector('.toast-body')
    destinoMsg.innerHTML= text;
    $('.toast').toast('show');
    setTimeout(()=>{
        $('.toast').toast('hide');
        destinoMsg.innerHTML= '';
    }, 2000)
}

const chargeDataArray = () => {
        ACCOUNT = [];
        getAccount().forEach( data =>  ACCOUNT.push({'account': data['account'], 'accountMount': data['accountMount']} ));
}

const getAccount = () => JSON.parse(localStorage.getItem('cuentas'));

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
            agregarPf();
        } else {
            msgInfo('Debe completar todos los campos');
        }
    });
    $('#btnClean').click( () => cleanForm());
    $('#btnReload').click( () => location.reload());
    $('#btnNewAccount').click(() => cargarCuenta())
    $('#exampleModalCenter').modal('hide');
});

