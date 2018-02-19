/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{ var importe;
	var resul;

// entrada
	importe = parseFloat( document.getElementById("importe").value );

	// calculo
    resul = importe * 0.75; 

//solucion
document.getElementById("resultado").value = resul.toFixed(2);
	
	
}
