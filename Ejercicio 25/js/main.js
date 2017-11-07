window.onload = function(){
  var formulario = document.getElementById('formulariocheck');
  formulario.action = ""+validarenlace()+".html";
}

function validarenlace(){
  var opcion = document.getElementById('lista');
  var marcado = opcion.options[opcion.selectedIndex].value;
  if (opcion.value == ninguno) {
    alert("Elija una pagina de la lista");
  }
  else{
      return marcado;
      }
    }
  }
}
