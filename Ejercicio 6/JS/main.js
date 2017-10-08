window.onload = function (){
    
    var numero = prompt("Introduce un número: ");

    
    if( numero = Number(numero)){
        document.write("<table border=1>");
        document.write("<th cellpading='5'>"+"Tabla de Multiplicar"+ numero + "</th>");
        for(i=0;i<=10; i++){
            document.write("<tr>");
            document.write("<td>"+numero+"</td>");
            document.write("<td>"+" * "+"</td>");
            document.write("<td>" + i + "</td>");
            document.write("<td>"+ "=" + "</td>");
            document.write("<td>" + numero*i + "</td>");
            document.write("</tr>");
        }
        document.write("</table>");
    }
}
