

window.onload=function(){
    var boton = document.getElementById('boton');
    boton.addEventListener('click',newgrabar);
    leer();
}

function newgrabar(){
    var nuevotexto = document.getElementById('texto').value;
    localStorage.setItem("nombre",nuevotexto);
}

function leer(){
    var texto = document.getElementById('texto');
    var valorclave = localStorage.getItem('nombre');
    texto.value = valorclave;
}
