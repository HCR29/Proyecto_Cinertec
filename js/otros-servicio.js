

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






function oculta(e){
    
    let imagen=e.querySelector('.imgproducto')

    imagen.setAttribute('style','height:0px; transition:1s')
}
function mostrar(e){

    let imagen=e.querySelector('.imgproducto')
    
    imagen.setAttribute('style','height:100%; transition:1s')
}


function seron(e){

    document.getElementById("ser").setAttribute("style" , "background-color: gray; color:white ; padding:10% 0% 0% 0%; ; " )
   
}

function seroff(e){

    document.getElementById("ser").setAttribute("style" , " " )
    
}

function seron(e){

    document.getElementById("ser").setAttribute("style" , "background-color: gray; color:white ; padding:10% 0% 0% 0%; ; " )
   
}

function seroff(e){

    document.getElementById("ser").setAttribute("style" , " " )
}

function ser1on(e){

    document.getElementById("ser1").setAttribute("style" , "background-color: gray; color:white ; padding:10% 0% 0% 0%; ; " )
   
}

function ser1off(e){

    document.getElementById("ser1").setAttribute("style" , " " )
}

function ser2on(e){

    document.getElementById("ser2").setAttribute("style" , "background-color: gray; color:white ; padding:10% 0% 0% 0%; ; " )
   
}

function ser2off(e){

    document.getElementById("ser2").setAttribute("style" , " " )
}