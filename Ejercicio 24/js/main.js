window.onload = function(){
  var formulario = document.getElementsByName('formulariocheck');
  formulario.action = validarenlace()+".html";

}


function validarenlace(){
  var opcion= document.getElementsByTagName('input');
  for ( i=0; i<opcion.length; i++){
    if (opcion[i].checked){
      var pagina = opcion[i].value;
    }
  }
  return pagina;
}
