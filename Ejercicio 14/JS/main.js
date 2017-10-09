//Variables
var fecha = new Date;

var fechasimple = "Fecha: " + fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();

var horacompleta = fecha.getHours()+fecha.getMinutes()+fecha.getSeconds();

var dosfecha = fecha.get

var nombredia=new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");



window.onload = function(){

    document.writeln(fechasimple);
    document.writeln("Hoy es: "+nombredia[fecha.getDay()]+"\n"+fecha.getDay()+" de "+ meses[fecha.getMonth()]+" de "+ fecha.getFullYear());
    var horatag = document.getElementsByTagName(input)[0];
    horatag.writeln(horacompleta);
}
