//Variables Generales
datos = "";
totalusuarios = 5;

function crearNombres() {
    //Limite de usuarios a crear y creación de arrays
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
    tabla = document.getElementByTagName("table");
    for (i = 0; i < totalusuarios; i++) {
        cogenombre[i] = datos.split("#")[i].split("*")[0];
        cogeedad[i] = datos.split("#")[i].split("*")[1];
        tabla.innerHTML = "<tr>" +
            "<td>" + cogenombre + "</td>" +
            "<td>" + cogeedad + "</td>" +
            "</tr>";
    }
}
