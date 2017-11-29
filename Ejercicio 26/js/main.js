window.onload = function(){
  var navegar = document.getElementById('lista').addEventListener("click", validarenlace);  
}

function validarenlace(){
  var opcion = document.getElementById('lista');
  var marcado = opcion.options[opcion.selectedIndex].value;
  if (marcado == "ninguno"){
    alert("Elija una pagina de la lista");
  }
  else{
     window.open(marcado + ".html");
  }
}
