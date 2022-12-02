document.getElementById('boton_alert').onclick = function(){
  alert('TE INSCRISBISTE CORRECTAMENTE');
}

function calendario(){
  document.getElementById("pf").innerText="Fecha:"+new Date().toLocaleDateString()
  document.getElementById("ph").innerText="Hora "+new Date().toLocaleTimeString()
  setTimeout(calendario,1000)
}
