function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	 case  "Enero" :
	 case  "Febrero" :
	 case  "Marzo" :
	 case  "Abril" :
	 case  "Mayo" :
	 case  "Junio": 	        
           alert (mesDelAño +  " Falta para el invierno." );
	break;
	 case  "Julio" :
	 case  "Agosto" :
	 case  "Septiembre" : 
	        alert (mesDelAño +   "Abrigate que hace frio." );
	break;
	default: 
	         alert (mesDelAño + "Ya pasamos el frio, ahora calor!!!." )
	break;
       

}





}//FIN DE LA FUNCIÓN