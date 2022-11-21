
/*Condicional de selccipn multiple */


/* Ejemplo: Un estudiante desea saber si aprobo el curso de JS
   Para tal fin crear un app que calcule el promedio de 3 notas
   y muestre el mensaje Aprobado

   Mensaje: 
   (if (condicion))       Aprobado → si el prom es mayor de 10
   (else if(condicion))   Subsanación → Si el promedio es mayor que 7
El alumno apueba el curso de JS si su promedio es mayor a 10
*/

//Entrada
let n1 = 0;
let n2 = 0;
let n3 = 0;
let prom = 0;
let mensaje = 0;
const result = document.getElementById("resultado");
const btnEnviar = document.getElementById("btnEnviar")

btnEnviar.onclick = function(){


//Proceso
n1 = 8;
n2 = 10;
n3 = 19;
prom = (n1+n2+n3)/3;

if(prom > 10){
    mensaje = "Aprobado"
} else if(prom > 7){
    mensaje = "Subsanación"
} else{
    mensaje = "Repite"
}

//Salida
resul.innerText = "Tu promedio es: " + prom.toFixed(2) + mensaje;
}
