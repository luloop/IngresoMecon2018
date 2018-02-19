function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta = "si";
	var numero ;
	var contNegativo=0;
	

	while (respuesta == "si")
	{ numero = parseInt ( prompt ( "Ingrese su numero" ));
     if (numero >=0) 
          { positivo = positivo + numero ;}
     else 
     	{negativo = negativo * numero;
     		contNegativo ++;	}
      respuesta = prompt ( "desea continuar? si - no ");
	} 

document.getElementById('suma').value=positivo;

if (contNegativo == 0 ) {negativo = 0;}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN