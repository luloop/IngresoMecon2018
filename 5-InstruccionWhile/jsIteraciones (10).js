function Mostrar()
{
var positivos=0;
var negativos=0;
var contador=0;
var contNegativo=0;
var contCeros=0;
var contPares;
var contPositivo=0;
var promNegativos;
var promPositivos;
var respuesta="s";
var numero;
var diferencia;

do 
{ 
	numero = parseInt ( prompt ( "Ingrese su numero" ));
    contador++;

    if (numero > 0) 
     { 
     	positivos += numero;
     	contPositivo++ ;
     }
     else if (numero < 0)
     {
     	negativos += numero;
     	contNegativo++;
     }
     else  { contCeros++; }

	 respuesta = prompt ( "desea continuar? s - n ");

 } while(respuesta!='n') ;


 promNegativos= negativos / contNegativo; //promedio negativos
 promPositivos = positivos / contPositivo ; //promedio positivos
 diferencia = positivos - negativos ; // diferencia entre positivos y negativos



	document.write ( "1 - suma de los negativos " + negativos+ "<br/>"); 
	document.write (" 2- suma de los positivos " +  positivos + "<br/>");
	document.write ( "3- Cantidad de positivos " + contPositivo+ "<br/>");
	document.write ("4 - cantidad de negativos " + contNegativo+ "<br/>");	
	document.write ( "1 - suma de los negativos " + negativos+ "<br/>");
	document.write (" 5- cantidad de ceros " +  contCeros+ "<br/>");
	document.write ( "6- cantidad de pares " + contPares+ "<br/>");
	document.write ("7 - promedio positivosa " + promPositivos + "<br/>");
	document.write ( "8- promedio negativos  " + promNegativos + "<br/>");
	document.write ("9 - diferencia entre positivos y negativos  " + diferencia + "<br/>");






		
	
}




//FIN DE LA FUNCIÓN