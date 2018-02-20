var cajadatos;

window.onload = function(){
    cajadatos = document.getElementById('datos');
    var boton = document.getElementById('boton');
    boton.addEventListener('click', leer)
}

function leer(){
    var url = "";
    var solicitud = new XMLHttpRequest();
    solicitud.addEventListener('load', mostrar);
    solicitud.open("GET",url , true);
    solicitud.send(null);
}

function mostrar(e){
    var datos = e.target;
    if(datos.status == 200){
        datos.innerHTML = datos.responseText;
    }
}