
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
//JS PELICULAS

//Slider Pelicula
var sliderindividual = document.querySelectorAll(".contenido-slider");
var contador = 1;

var ancho = sliderindividual[0].clientWidth;

window.addEventListener("resize", function () {
    ancho;
});
var intervalo = 3000;

function carrusel() {
  var slider = document.querySelector(".contenedorslider");

  slider.style.transform = "translate(" + -ancho * contador + "px)";
  slider.style.transition = "transform 1.5s";
  contador++;
  if (contador == sliderindividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1000);
  }
}
setInterval(function () {
  carrusel();
}, intervalo);
carrusel();


//overbloc
function overblok(e){

    e.setAttribute("style"," border-radius:20px; antiquewhite;transition:all 1s")
}

function outblok(e){

    e.setAttribute("style","background-color:white; border-radius:0px;transition:all 1s")
}
//carr
