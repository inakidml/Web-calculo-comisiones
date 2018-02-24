function calcular() {
            entrada = document.getElementById("Entrada").value;
            salida = document.getElementById("Salida").value;
            comision = document.getElementById("Comision").value;
            document.getElementById("inputResultado").value =salida - entrada;
            document.getElementById("inputComision").value =((parseFloat(entrada)+parseFloat(salida)) * comision)/100;
}