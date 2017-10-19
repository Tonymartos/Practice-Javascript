//Variables Generales
  datos = "";

function crearNombres() {
    //Limite de usuarios a crear y creación de arrays
    totalusuarios = 5;
    nombre = new Array();
    edad = new Array();
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

    // tabla = getElementById('table');
    // tabla.innerHTML = "<tr>" + "<td>" + + "</td>" + "</tr>";
}
