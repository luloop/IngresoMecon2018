function Mostrar()
{
//tomo la hora 
var laHora = parseInt(document.getElementById('hora').value);


//alert (laHora);
	switch (laHora) 
	{ case 7 :
	  case 8 :
      case 9 :
      case 10:
      case 11: 
 
    
	       alert ( "es de MAÑANA");
	break;
      default:
           alert ( " NOP")
    break;

	}



}//FIN DE LA FUNCIÓN