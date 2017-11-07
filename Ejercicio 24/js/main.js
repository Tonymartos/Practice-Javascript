window.onload = function(){
  var navegar = document.getElementById('enviar').addEventListener("click", abrirpaginas);
}

function abrirpaginas(){
  window.open(validarenlace());
}

function validarenlace(){
  var x = 0;
  var paginaswebs = [];
  var opcion = document.getElementsByTagName('input');
  for ( i=0; i<opcion.length; i++){
    if (opcion[i].checked){
      paginaswebs [x] = opcion[i].value + ".html";
      x++;
    }
  }
  return paginaswebs;
}
