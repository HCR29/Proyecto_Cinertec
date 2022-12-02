
function desplegableon(e){

    document.getElementById("ul").setAttribute("style" , "display: block; margin: 0px; padding: 5px 0 0 0;opacity: 0.5")
    
}

function desplegableoff(e){

    document.getElementById("ul").setAttribute("style" , "display: none" )
}

function aon(e){

    e.setAttribute("style" , "color: red")
}
function aoff(e){

    e.setAttribute("style" , "color: white")
}





var imagenes=["img/img-carru.jpg.","img/img-carru-1.jpg.","img/img-carru-2.jpg","img/img-carru-3.jpg"]
var c=0
function carrusel(){
    document.getElementById('contenido-carrusel').setAttribute("src",imagenes[c])
    c++
    if(c>=imagenes.length) c=0

    setTimeout(carrusel,2000)
}





function taron(){

    document.getElementById("tar").setAttribute("style" , " width: 35%; height: 75%; ")
    
}

function taroff(){

    document.getElementById("tar").setAttribute("style" , " width: 30%; height: 70%;" )
}

function tar1on(){

    document.getElementById("tar1").setAttribute("style" , " width: 35%; height: 75%; ")
    
}

function tar1off(){

    document.getElementById("tar1").setAttribute("style" , " width: 30%; height: 70%;" )
}


function liboon(e){

    document.getElementById("li-boton").setAttribute("style" , "background-color: gray; color: white")
   
}

function libooff(e){

    document.getElementById("li-boton").setAttribute("style" , " " )
    
}

function libo1on(e){

    document.getElementById("li-boton1").setAttribute("style" , "background-color: gray; color:white")
   
}

function libo1off(e){

    document.getElementById("li-boton1").setAttribute("style" , " " )
    
}

function libo2on(e){

    document.getElementById("li-boton2").setAttribute("style" , "background-color: gray; color:white")
   
}

function libo2off(e){

    document.getElementById("li-boton2").setAttribute("style" , " " )
    
}

function legalon(e){

    document.getElementById("li-boton-legal").setAttribute("style" , "background-color: gray; color:white")
   
}

function legaloff(e){

    document.getElementById("li-boton-legal").setAttribute("style" , " " )
    
}

function legal1on(e){

    document.getElementById("li-boton1-legal").setAttribute("style" , "background-color: gray; color:white")
   
}

function legal1off(e){

    document.getElementById("li-boton1-legal").setAttribute("style" , " " )
    
}