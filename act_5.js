
filtraMayores = (numeros, referencia) => {
    return numeros.filter((number) => number > referencia);

}

console.log("Actividad 5 : Uso de filter")
console.log(`${numeros} referencia = 3`)
console.log(filtraMayores(numeros,3))