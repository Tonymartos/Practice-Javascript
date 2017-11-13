window.onload = function(){
  var navegar = document.getElementById('enviar').addEventListener("click", validarenlace);
}


function validarenlace(){
  var opcion = document.getElementsByTagName('input');
  for ( i=0; i<opcion.length; i++){
    if (opcion[i].checked){
      window.open(opcion[i].value + ".html");
    }
  } 
}
