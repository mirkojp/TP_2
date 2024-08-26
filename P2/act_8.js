
multiplicarDos = (valor) =>{
    return valor * 2
}

procesarArray = (lista, funcion) =>{
    return lista.map(funcion)
}

const numeros = [1, 2, 3, 4, 5];
const resultado = procesarArray(numeros, multiplicarDos);

console.log("Actividad 8 : Funcion usa otra")
console.log(resultado)