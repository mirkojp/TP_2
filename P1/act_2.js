const direccion ={
    calle : "Alberdi",
    ciudad : "Cdelu",
    pais : "Arg",
};

const estudiante={
    nombre : "Antonio",
    edad : 19,
    direccion : direccion,
};

console.log("Actividad 2 : Direccion completa");
console.log("calle = ", estudiante.direccion.calle);
console.log("ciudad = ", estudiante.direccion.ciudad);
console.log("pais = ", estudiante.direccion.pais);