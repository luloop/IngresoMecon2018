/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ var ancho = parseFloat ( document.getElementById ("Largo").value) ;
  var largo= parseFloat ( document.getElementById ("Ancho").value); 
  

  // esto no hace flata hacerlo, excepto que lo pida el enunciado
 // if ( isNaN (ancho) || isNaN (largo)|| ancho == " " || largo == " ")
  //{
    //  alert ( " no ingresó un dato valido");
      //parseFloat ( document.getElementById ("Largo").value = " ";
      //parseFloat ( document.getElementById ("Ancho").value)= " "; 

  //}
  //else 
  //{
  var alambre = ((ancho*2) + (largo*2))*3 ;

  alert ( " necesita comprar alambre por " + alambre + " mts" );
  //}
}
function Circulo () 
{ var radio = parseFloat ( document.getElementById ("Radio").value) ;
  var alambre = (2* 3.14* radio)*3;

alert ( " necesita comprar alambre por " + alambre + " mts" );
	
}
function Materiales () 
{ var ancho = parseFloat ( document.getElementById ("Largo").value) ;
  var largo= parseFloat ( document.getElementById ("Ancho").value); 
  var areaCuadrado;
  var cemento;
  var cal;

  areaCuadrado = (ancho*largo);

  cemento = areaCuadrado*2;
  cal = areaCuadrado*3;

  alert ( " debe comprar " + cemento + " bolsas de cemento y debe comprar " +  cal + "  bolsas de cal");





}