/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ var precio1 ;
  var precio2;
  var precio3;
  var sumaTotal;

  precio1 = parseInt ( document.getElementById ( "PrecioUno").value);
  precio2 = parseInt ( document.getElementById ( "PrecioDos").value);
  precio3 = parseInt ( document.getElementById ( "PrecioTres").value);

  sumaTotal = precio1+precio2+precio3 ;


  alert ( " la suma es "+ sumaTotal);
   
	
}
function Promedio () 
{  var precio1 ;
    var precio2;
    var precio3;
    var Promedio;
    
      precio1 = parseInt ( document.getElementById ( "PrecioUno").value);
      precio2 = parseInt ( document.getElementById ( "PrecioDos").value);
      precio3 = parseInt ( document.getElementById ( "PrecioTres").value);

     Promedio = ( precio1 + precio2+ precio3)/3;

      alert ( " el promedio es "+ Promedio);
	
}
function PrecioFinal () 
{ 
    var precio1 ;
    var precio2;
    var precio3;
    var PrecioFinal;
    
      precio1 = parseInt ( document.getElementById ( "PrecioUno").value);
      precio2 = parseInt ( document.getElementById ( "PrecioDos").value);
      precio3 = parseInt ( document.getElementById ( "PrecioTres").value);

      PrecioFinal = ( precio1 + precio2+ precio3)*1.21;

      alert ( " el precio con iva es  es "+ PrecioFinal);
	
}