/*
function saludar(){

    console.log("MOUSE MOVEE!");
}




let boton = document.getElementById("boton");

boton.addEventListener("click" , function(){   
                                    console.log("HOLLLA ANONIMO");
                                });


*/
/* EVENTOS DE MOUSE*/
//boton.addEventListener("mousemove" , saludar);
/*
boton.addEventListener("mousedown" , function(e){

    console.log(e);
    if( e.button == 0){
        console.log("BOTON IZQ");
    }
    else if( e.button == 1){
        console.log("BOTON RUEDITA");
    }
    else if( e.button == 2){
        console.log("BOTON DER");
    }


});



window.addEventListener("keydown" , function(e){

    console.log( e.key);
    if( e.key == "a"){
        document.body.style.background = "blue";

    }
    else if( e.key == "e"){
        document.body.style.background = "white";

    }
}) 

window.addEventListener("keyup", function(e){

    if(e.key == "a"){
        document.body.style.background = "red";

    }


})






*/


let botonForm = document.getElementById("botonForm");

botonForm.addEventListener("click" , function(e){
    e.preventDefault();
    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("pass");
    console.log(usuario.value);
    console.log(pass.value);

})

/*
let formulario = document.getElementById("forulario");

formulario.addEventListener("submit" , function(){




})
*/


let link = document.getElementById("link");


link.addEventListener("click" , e=> {
    e.preventDefault();
    alert("NO");

});

