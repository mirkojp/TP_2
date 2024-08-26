
const sumarElementos = (numeros) => {
    return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
}

const suma = sumarElementos(numeros);

console.log("Actividad 6 : Uso de reduce")

console.log("Números:", numeros);
console.log("Suma de los elementos:", suma);