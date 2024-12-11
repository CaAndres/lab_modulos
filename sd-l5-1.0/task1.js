// export function costCalculator(transaccioncCuenta) {

//     //validar que la entrada sea un número
//     if (typeof transaccioncCuenta !== 'number' || transaccioncCuenta <= 0){
//         return "La cantidad de transacción debe ser un número positivo."
//     }
//     //Calcular tarifa fija y el interes
//     const transaccionFija = 3;
//     const intereses = 0.01;
//     //Calcular el costo total
//     const totalCosto = transaccioncCuenta * intereses + transaccioncCuenta + transaccionFija
//     return totalCosto
// }


export function costCalculator(transaccioncCuenta) {

    //Calcular tarifa fija y el interes
    const intereses = 0.01;
    const transaccionFija = 3;
    const monto = parseFloat(transaccioncCuenta);
    //Calcular el costo total
    const totalCosto = monto + transaccionFija + (monto*intereses)
    return parseFloat(totalCosto.toFixed(2))
}