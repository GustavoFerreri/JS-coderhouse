let url= "https://jsonplaceholder.typicode.com/posts";
let hp= "http://hp-api.herokuapp.com/api/characters";
// let clima = api.openweathermap.org/data/2.5/find?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

let latitude =0;
let longitude =0;

function mostrarUbicacion(position){
    console.log(position)
    latitude = position.coords.latitude;
    longitude = position.coords.longitude; 
}

let ubicacion = navigator.geolocation.getCurrentPosition(mostrarUbicacion)
let clima = `api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt={cnt}&appid=f9bfc075a4ba5e3a3289bb2c2658d4a1`

$('#btnGet').click(function(){
    $.get(url, function(datos){
        console.log(datos)
    })
})

$('#btnGeo').click(function(){
    $.get(clima, function(respuesta){
        console.log(respuesta)
    })
})