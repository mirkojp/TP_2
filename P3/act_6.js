

obtenerPagina = (array, npagina, tamañoPagina = 5) => {
    const inicio = npagina * tamañoPagina;
    const fin = inicio + tamañoPagina;

    const nuevaArray = array.slice(inicio, fin);

    return nuevaArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log("Actividad 6 : Paginacion de datos")

console.log("Original");
console.log(array)
console.log("Página 2:");
console.log(obtenerPagina(array, 2)); 