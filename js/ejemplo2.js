let nombre= prompt("Ingrese su nombre")
let dias= prompt("Ingresa los días trabajados");
let pago= prompt("Ingresa el pago por hora");
let pagototal = dias*pago;

let bono = 120/100;

if (dias>15) {
    pagototal = dias*pago*bono;
}
document.write(`${nombre} Sueldo Total : `+ pagototal);