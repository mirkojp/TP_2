
crearMultiplicar = (x) => {
    return (n) =>{
        return n * x
    }
}

const multiplicarPor3 = crearMultiplicar(3)

console.log("Actividad 9: Crear Multiplicador")

console.log(multiplicarPor3(5))
console.log(multiplicarPor3(10))