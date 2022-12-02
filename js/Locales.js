//CARRUSEL para la pagina de locales//

const imagenes=["img/IMAGEN3.jpg","img/IMAGEN1.jpg","img/IMAGEN2.jpg","img/IMAGEN4.jpeg","img/IMAGEN5.jpg"]
var b=0
function carrusel(){
    document.getElementById("carrusellocales").setAttribute("src",imagenes[b])
    b++
    if(b>=imagenes.length) b=0
    setTimeout(carrusel,1500)
}
//colorear para hacer que mi tirulo parece desvanecer//
const colores=["rgba(133,59,76,255)","black","rgba(147,72,86,265)","rgba(150,80,92,280)", "orange","rgba(197, 28, 70, 1)"]
var a=0
function colorear(){
     document.getElementById("titulo").setAttribute("style", "color:"+colores[a])
     a++
     if(a>=colores.length) a=0
     setTimeout(colorear,1000)
}


//hacer al boton cambiar de color//
let boton=document.querySelector("#cambiar_color");

boton.addEventListener("click", ()=>
{
    document.body.style.backgroundColor=`rgba(${aleatorio1}, ${aleatorio2}, ${aleatorio3}, ${aleatorio4})`;
});

//Hcaer rotar los botones//
function efecto_rotacion(e){
    //1.accedo al elemento de visitar
    //2.cambiar el estilo (atributo) rotacion sobre X de 360 grados en transition 2s
    e.setAttribute(
        "style","transform:rotateX(360deg); transition:all 2s" )
}
function efecto_rotacionq(e){
    e.setAttribute(
        "style","transform:rotateX(360deg);background-olor:grey;opacity:0.5; transition:all 2s" )
}
  //hacer crecer las imagens//
    function dentro(e){
        e.setAttribute('style','scale:1.25; transition:all 1.5s')
    }
    function fuera(e){
        e.setAttribute('style','scale:1 ; transition:all 1s')
    }

//barra de menu con botones//
function mostrarcolorboton(){
    document.getElementById('BOTON1').setAttribute('style','color:green;background-color:grey;box-shadow: 0 9px #999;')
}
function efecto_rotacionqe(e){
    e.setAttribute(
        "style",";opacity:0.5; transition:all 1s" )
}
function efecto_rotacionqes(e){
    e.setAttribute(
        "style",";opacity:1; transition:all 2s" )
}

function mostrarcolorboton2(){
    document.getElementById('BOTON2').setAttribute('style','color:green;background-color:rgb(100, 148, 246);border: 3px solid black;')
}
function mostrarcolorboton3(){
    document.getElementById('BOTON3').setAttribute('style','color:rgb(141, 148, 246);background-color:rgb(20, 23, 66);border-bottom-style:solid;box-shadow: 0 9px #999;')
}
function mostrarcolorboton4(){
    document.getElementById('BOTON4').setAttribute('style','color:#fffcb2;background-color:#504e0c;box-shadow: 0 9px #999;')
}
