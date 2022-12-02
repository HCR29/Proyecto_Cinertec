
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

var color= ["red", "white"]
var cont= 0;

function titulos(){

    document.getElementById('titulo').setAttribute('style',  'color:'+ color[cont]);
   
    cont++;

    if(cont >= color.length)
        cont=0; 

    setTimeout(titulos, 1000)
}


function mostrarPromo1(e){

    e.setAttribute('src', "video/promo1.png")
}

function agrandarimagen1(e){

    e.setAttribute('style', 'transition: all 1s;transform: scale(1.5)');
}
function ocultarPromo1(e){

    e.setAttribute('src' ,"img/promo1f.jpg")
}

function ocultarimagen1(e){

    e.setAttribute('style', 'transition: all 1s;transform: scale(1)');
}
function mostrarPromo(e){

    e.setAttribute('src', "video/promo21.png");
   
}

function agrandarimagen(e){

    e.setAttribute('style', 'transition: all 1s;transform: scale(1.5)');
}

function ocultarPromo(e){

    e.setAttribute('src' ,"img/promo2f.jpg")
}

function ocultarimagen(e){

    e.setAttribute('style', 'transition: all 1s; transform: scale(1)');
}