// Selectores con jquery
let parrafo = $('p')
console.log(parrafo)

// parrafo.hide()

// los selectores funcionan como los de css
// div p
let parrafo2 = $("div p")
console.log(parrafo2)

// Para seleccionar por class . para realizarlo por id #
// Aplicar estilo css
$('div p').css('background-color', 'blue')

// Seleccionamos el primer elemento
$('li:first').css('color', 'red')
// Seleccionamos el segundo elemento
$('li:last').css('color', 'blue')
// Seleccionamos pares
$('li:odd').css('background-color', 'orange')
// Seleccionamos impares
$('li:even').css('background-color', 'green')
// Seleccionamos eun elemento
$('li:nth-child(5)').css('background-color', 'pink')