function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero ;

// estructura repetitiva	

while (contador < 5) // 5 repeticiones //la iteracion cero, tambien es una iteracion
{
numero = parseInt (prompt ((contador + 1)+ " ingrese un numero"));
acumulador =numero + acumulador; 
contador = contador +1; // aumenta la cuenta// cuenta 5 veces
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN