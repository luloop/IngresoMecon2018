/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
	ArgentinaLuz
	FelipeLamparas
	JeLuz
	HazIluminacion
	Osram


 */
function CalcularPrecio () 
{ var cantidad = parseInt ( document.getElementById ("Cantidad" ).value);
  var marca = document.getElementById  ( "Marca").value;
  var PrecioFinal;
  var importeFinal;
  var IIBB;
  
  
switch (cantidad)
   {
case 1:
case 2:
     {
        PrecioFinal = 35*cantidad;
     } 
     break;
case 3:
     if (marca == "ArgentinaLuz") 
     {
        PrecioFinal= 35*cantidad *0.85;
     }
     else if (  marca == "FelipeLamparas") 
     {
        PrecioFinal= 35*cantidad *0.9
     }
     else 
     {
        PrecioFinal= 35*cantidad *0.95;
     }
    break;
case 4:
     if  ( marca == " ArgentinaLuz" || marca == "FelipeLamparas" )
     {
     PrecioFinal = 35*cantidad *0.75;
     }
     else
      {
       PrecioFinal = 35*cantidad*0.8;
      } 
       break;
case 5:
    if (marca == "ArgentinaLuz") 
       {
     PrecioFinal= 35*cantidad *0.6;
       }
    else 
       { 
     PrecioFinal = 35*cantidad*0.7;
       } 
       break;
default: // 6 o mas
       {
          PrecioFinal = 35* cantidad *0.5;
       } 
       break;
    }

// IIBB
       if (PrecioFinal > 120)
    {
    PrecioFinal =PrecioFinal*1.1;
    IIBB= PrecioFinal*0.1;
    alert ( "IIBB Usted pago "+ IIBB);
    }

    // muestro el precio final
  document.getElementById ("precioDescuento").value = PrecioFinal;

}

/*4.  
  if ( cantidad >= 6 && marca == "ArgentinaLuz ") 
      {
          PrecioFinal = 35* cantidad *0.5;
      }
 else if (cantidad == 5 && marca == "ArgentinaLuz ") 
      {
       PrecioFinal= 35*cantidad *0.6;
       }
 else if (cantidad == 5)
       { 
       PrecioFinal = 35*0.7;
       }
 else if ( cantidad == 4 && ( marca == " ArgentinaLuz" || marca == " FelipeLamparas" ))
     {
     PrecioFinal = 35*cantidad *0.75;
     }
       
 else if (cantidad == 4 )
        {
        PrecioFinal = 35*cantidad*0.8;
        }
 else if ( cantidad == 3 && marca == " ArgentinaLuz") 
    {
        PrecioFinal= 35*cantidad *0.9;
    }
 else if ( cantidad == 3 ) 
    {
        PrecioFinal= 35*cantidad *0.95;
    }
 else {
        PrecioFinal = 35*cantidad;
    }
    

}    


 




// muestro el precio final
  document.getElementById ("precioDescuento").value = PrecioFinal;




 */
 	

