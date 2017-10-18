window.onload = function(){
    simple();
    completo();
    hora = setInterval(horacompleta,1000);
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
    fecha = new Date();
    hora = fecha.getHours();
    minutos = fecha.getMinutes();
    segundos = fecha.getSeconds();

    strSegundo = new String(segundos)
    if(strSegundo.length==1){
        segundos = "0"+segundos;
    }

    strMinutos = new String(minutos)

    if(strMinutos.length==1){
        minutos = "0"+minutos;
    }

     strHora = new String(hora)

    if(strHora.length==1){
        hora = "0"+hora;
    }

    cajatexto = document.getElementsByTagName("input");
    cajatexto[0].value=" "+hora+":"+minutos+":"+segundos;
  }
