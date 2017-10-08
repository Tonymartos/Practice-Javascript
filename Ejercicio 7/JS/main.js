window.onload = function (){
    
    var numero = prompt("Introduce un número: ");
    var ancho = "20";
    var color1 = "LightBlue";
    var color2 = "LightGreen";
    
    if( numero = Number(numero)){
        document.write("<table border='1'>");
        document.write("<tr><th colspan='8' width='"+ancho+"%' height='"+ancho+"%'>"+"Tabla de Multiplicar "+ numero + "</th>");
        for(i=0;i<=10; i++){
            if(i % 2 == 0){
                document.write("<tr bgcolor='"+color1+"'>");
            }else{
                document.write("<tr bgcolor='"+color2+"'>");
            }
            document.write("<td>"+numero+"</td>");
            document.write("<td>"+" * "+"</td>");
            document.write("<td>" + i + "</td>");
            document.write("<td>"+ "=" + "</td>");
            document.write("<td>" + numero*i + "</td>");
            document.write("</tr>");
        }
        }
        document.write("</table>");
    }

