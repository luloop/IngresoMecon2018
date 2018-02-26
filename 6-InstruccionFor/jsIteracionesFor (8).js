function Mostrar()
{
var numero = parseInt (prompt ( "ingrese un numero"));
for ( var i = 2; i <= numero; i++)
{
    if ( numero % i == 0 && i != numero)
    { 
    alert ("su numero NO es primo");
    break;
    }
    if (i % numero == 0 )
    {
         alert( " su numero es primo");
    }


}



}//FIN DE LA FUNCIÓN