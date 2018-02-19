function Mostrar()
{

	var contador=0;
	var numero ;
	var maximo;
	var minimo;
	var respuesta = "si";

	do
	{ numero = parseInt ( prompt ( "Ingrese su numero" ));
    
     contador ++; // en la primer iteracion establezco el minimo y el maximo

    if (contador == 1) 
    	{ 
    	minimo = numero;
    	maximo = numero;
    	}
      // luego de la primera iteracion siempre se aplica esto
    else {
             if ( numero < minimo) 
     	     { 
     		 minimo = numero;
     	     }
             if  (numero >= maximo)
             {
             maximo = numero;
             } 
          }

  respuesta = prompt ( "desea continuar? si - no ");

    } while(respuesta!='no') ;

document.getElementById("maximo").value= maximo;
document.getElementById("minimo").value= minimo;



}//FIN DE LA FUNCIÓN