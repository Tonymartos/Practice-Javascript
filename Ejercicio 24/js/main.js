function enlace(){
  var opcion= document.getElementsByTagName('input')[i];

  for (var i=0; i<opcion.length; i++){
    if (opcion[i].checked){
      switch (opcion){
        case 0:
          opcion.onClick = "window.location='https://www.google.es/'";
          break;
        case 1:
          opcion.onClick = "window.location='https://www.google.es/'";
          break;
        case 2:
        opcion.onClick = "window.location='https://www.google.es/'";
          break;
        case 3:
          opcion.onClick = "window.location='https://www.google.es/'";
          break;
        case 4:
          opcion.onClick = "window.location='https://www.google.es/'";
          break;
      }
    }
  }
}
