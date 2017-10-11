//Variables Globales




window.onload = function(){
    fechatotal();
    setInterval(horacompleta,1000);    
}


function simple(){
    var fecha = new Date;    
    fechasimple = "Fecha: " + fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    simple = document.getElementById("simple"); 
    simple.textContent=fechasimple; 
}



function completo(){
    var fecha = new Date;    
    nombredia=new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");    
    meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    fechacompleta= "Fecha Completa: " + nombredia[fecha.getDay()]+"\n"+fecha.getDate()+" de "+ meses[fecha.getMonth()]+" de "+ fecha.getFullYear();
    completa = document.getElementById("completo");
    completa.textContent=fechacompleta;
}

function horacompleta(){
    var fecha = new Date;
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var horacompleta = hora+":"+minutos+":"+segundos;
    var cajatexto = document.getElementById("autohora");
    cajatexto.textContent=valorcaja;


}


