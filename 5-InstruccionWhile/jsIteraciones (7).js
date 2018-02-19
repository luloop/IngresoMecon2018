function Mostrar()
{

	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;
	var contador = 0 ; 
// es correcto para javascript pero no fucniona en C++

//while ( respuesta != "si") 
//{

//numero = parseInt ( prompt ( "ingrese su numero " + (respuesta +1) + Para" finalizaro ingrese "si "))
//acumulador = acumulador + numero
//respuesta = respuesta +1

// }

while (respuesta =="si")
{
numero = parseInt ( prompt ( "ingrese su numero "));
acumulador = acumulador + numero;
contador = contador +1;
respuesta = prompt ( "Desea continuar? si/no");

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN