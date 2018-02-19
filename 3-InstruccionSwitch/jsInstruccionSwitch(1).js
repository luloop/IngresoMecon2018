function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
	case "Enero" : 
	        alert (mesDelAño + " que comiences bien el año!!!." );
	break;
	case "Marzo" : 
	        alert (mesDelAño + " A clases!!");
	break;
	case "Julio" :
	alert (mesDelAño + " se vienen las vacaciones");
	break;
	case "Diciembre":
	alert (mesDelAño + " Felices Fiestas")
	break;
	default: 
	alert (mesDelAño)
	break;
       

}





}//FIN DE LA FUNCIÓN