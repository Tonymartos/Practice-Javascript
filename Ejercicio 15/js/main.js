//Variables Generales
  datos = "";

function crearNombres() {
    //Limite de usuarios a crear y creación de arrays
    totalusuarios = 5;
    nombre = new Array();

    //Recoger datos, añadirlos al array y mostrarlo por pantalla
    for (i = 0; i < totalusuarios; i++) {
        nombre[i] = prompt("Introduce el " + (i + 1) + "º" + " nombre: ");
        edad[i] = prompt("Introduce su edad: ");
    }

    for (i = 0; i < totalusuarios; i++) {
        datos += nombre[i] + "*" + edad[i] + "#";
    }
    alert(datos);
}

function crearTablas() {
    cogenombre = [];
    cogeedad = [];

    for(i=0; i<totalusuarios; i++){
      cogenombre[i] = datos.split("#")[i].split("*")[0];
      cogeedad[i] = datos.split("#")[i].split("*")[1];
    }

    var tabla = document.getElementsByTagName('table')[0];
    tabla.innerHTML = "<tr><td>Nombre</td><td>Edad</td></tr>";

    for(i=0;i<totalusuarios;i++){
      tabla.innerHTML += "<tr><td>"+cogenombre[i]+"</td><td>"+cogeedad[totalusuarios-i-1]+"</td></tr>"
    }
}
