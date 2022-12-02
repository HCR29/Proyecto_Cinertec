/*asociar el atributo de evento onclick de cada elemento li con la funcion click_li(this) */

/*function click_li(e){
    //recupero el nodo padre, main-novedades(id)
    let main=document.getElementById('contenedor1')

    //antes de crear los elementos primero elimino los nodos hijos existentes, cual es la rutina?
    //mientras tienes nodoshijos, eliminar el primer hijo
    while(main.hasChildNodes()){
        main.removeChild(main.firstChild)
    }

    //crear y agregar un h2

    //crear y agregar un img
    let contenedor=document.createElement('contenedor1')
    contenedor.setAttribute('src',e.getAttribute('data-menu'))
    main.appendChild(contenedor)
}*/


/*otro metodo*/
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})

/*metodo para que el titulo aprezca y desaparezca*/
var sw=0
function efectoh1(){
    if(sw==0){
        document.getElementById('marcasasociadas').setAttribute('style','opacity:0; transition:1s')
        sw=1
    }
    else{
        document.getElementById('marcasasociadas').setAttribute('style','opacity:1; transition:1s;background-color:rgb(47, 97, 80);')
        sw=0
    }
    setTimeout(efectoh1,3000)
}

function overespacio(e){
    e.setAttribute('style','width:90%; height:90%; margin-left: 5.3%;margin-top: 10px; transition:all 1s')
}
function outespacio(e){
    e.setAttribute('style','width:80%;height:80%; padding:0px 2px 2px 2px ; transition:all 1s')
}
