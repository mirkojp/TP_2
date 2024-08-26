const persona1 = {
    nombre : "Juan",
    apellido : "Perez"
}

const persona2 = {
    nombre: "Mateo",
    apellido: "Mansanares",
    edad : "20"
}

const personaCombinada = Object.assign({}, persona1, persona2);
console.log("Actividad 8 : Combinar objetos")
console.log(personaCombinada);