
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

function ocultar(e){
    let imagen=e.querySelector('.imgblok')
    imagen.setAttribute('style','height:0px; transition:1s')
    e.setAttribute("style","background-color: rgba(92, 1, 1, 0.884); border-radius: 20px; transition: all 1s;font-size: 18pt; color: white;")
}
function mostrar(e){
    let imagen=e.querySelector('.imgblok')
    imagen.setAttribute('style','height:250px; transition:1s')
    e.setAttribute("style","background-color: antiquewhite ; border-radius:15px; transition: all 1s;font-size: 11pt; color: gray")

}

function ocultari(e){
    e.setAttribute("style","opacity:0.5")
}
function mostrari(e){
    e.setAttribute("style","opacity:1")

}
