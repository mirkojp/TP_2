let persona = setPersona("Juan", 4)

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

console.log("Actividad 5 : Actualizar objeto");
console.log("Antes actualizar")
console.log(persona)
console.log("Despues actualizar")
actualizarEdad(persona, 20)
console.log(persona)