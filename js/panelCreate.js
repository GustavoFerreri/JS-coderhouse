class panelCarga {
    constructor(title, destiny, image=true, nameImg){
        this.title = title
        this.destiny = destiny
        this.image = image
        if(image) this.imgName = './img/' + nameImg
    }
    createBody = () =>{
        $('<div/>', {class: 'card', id : `marco_${this.destiny}`}).appendTo(`#${this.destiny}`)
        if(this.image) this.createImg()
        $('<div/>', {class: 'card-content', id: `content_${this.destiny}`}).appendTo(`#marco_${this.destiny}`)
        if(!this.image) $(`<span/>`, {class: 'card-title', text: this.title}).appendTo(`#content_${this.destiny}`)
    }
    createImg = () =>{
        $('<div/>', {class: 'card-image', id: `img_${this.destiny}`}).appendTo(`#marco_${this.destiny}`)
        $(`#img_${this.destiny}`).append(`<img src="${this.imgName}"></img>`)
        $(`<span/>`, {class: 'black-text card-title', text: this.title}).appendTo(`#img_${this.destiny}`)
    }
}

class formCarga extends panelCarga{
    constructor(title, destiny, fields, action, nameImg, image){
        super(title, destiny, image, nameImg)
        this.fields = fields
        this.action = action
    }
    createForm = () =>{
        this.createBody()
        $('<form/>').appendTo(`#content_${this.destiny}`)
        this.createInput(this.fields)
        this.createAction(this.action)
    }
    createInput = (nameItem) =>{
        nameItem.forEach(nameTo=>{
            $('<div/>', {class: 'row ', id: nameTo}).appendTo('form')
            $('<input/>',{type: 'text', name: nameTo, id: nameTo, placeholder: 'Ingrese ' + nameTo}).appendTo('#' + nameTo)   
        })
    }
    createAction = (nameItem) =>{
        $('<div/>',{class: 'card-action'}).appendTo(`#marco_${this.destiny}`)
        nameItem.forEach(nameTo=>{
            $('<a/>', {class: 'waves-effect waves-light btn', id: 'btn'+nameTo, text: nameTo}).appendTo('.card-action')
            $('#btn'+nameTo).on('click', ()=>{
                if(nameItem.indexOf(nameTo)==0) agregarPf()
                if(nameItem.indexOf(nameTo)==1) this.cleanForm()
                if(nameItem.indexOf(nameTo)==2) location.reload()
            })
        })
    }
    cleanForm=()=>{this.fields.forEach(nameTo=>{$(`input[name=${nameTo}]`).val('')})}
}

class dollarPanel extends panelCarga{
    constructor(title, destiny, nameImg, image){
        super(title, destiny, image, nameImg)
    }
    showValor = () =>{
        this.createBody()
        let url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
        $('<div/>', {class: 'row green-text text-darken-4', id: 'sell'}).appendTo(`#content_${this.destiny}`)
        $('<div/>', {class: 'row red-text text-darken-4', id: 'buy'}).appendTo(`#content_${this.destiny}`)
        $.get(url, function(datos){
            $('<span/>', {text: `Venta ${datos[1]['casa']['venta']}`}).appendTo('#sell')
            $('<span/>', {text: `Compra ${datos[1]['casa']['compra']}`}).appendTo('#buy')
        })
    }
}

msgBox = (txt) => M.toast({ html: txt})