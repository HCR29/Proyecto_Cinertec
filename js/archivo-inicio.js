
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

var imagenes = ['img/carrusel1.jpg','img/carrusel2.jpg','img/carrusel3.jpg','img/carrusel4.jpg','img/carrusel5.jpg']
var c= 0;

function carrusel(){

    document.getElementById('imgcarrusel').setAttribute("src", imagenes[c])
   
    c++

    if(c>imagenes.length-1)c=0

    setTimeout(carrusel, 3000);
}

function ocultarTexto(e){

    let imagen= e.querySelector('#imgestre');
    imagen.setAttribute('style', 'height: 0px; transition: 2s;')
}

function mostrarTexto(e){

   
    let imagen= e.querySelector('#imgestre')
    imagen.setAttribute('style', 'height: 100%; transition: 2s')
}

var modal= document.querySelector('.modal');
var images= document.querySelectorAll('.img-galeria img');
var modalling= document.querySelector('#mymodalimg');
var imgbox= document.querySelectorAll('.lists img');
var caption= document.querySelector('caption-text');
var close= document.querySelector('.close');

function clickear(){

    document.querySelector('.modal').setAttribute('style','display: block');
}

function verProducto(e){

    document.getElementById('mymodalimg').setAttribute('src', e.getAttribute('src'));
}


function ocultarProducto(e){

    document.getElementById('mymodalimg').setAttribute('src', 'img/promo.jpg' )
}

function cerrar(){

    document.querySelector('.modal').setAttribute('style','display: none');
}

var colores= ["red", "white", "gray", "blue", "pink", "violet", "green"]
var cont= 0;

function socio(){

    document.getElementById('acolor').setAttribute('style',  'color:'+ colores[cont]);
   
    cont++;

    if(cont >= colores.length)
        cont=0; 

    setTimeout(socio, 300)
}

