
const estudianteCopia = JSON.parse(JSON.stringify(estudiante));


estudianteCopia.nombre = "Carlos";
estudianteCopia.edad = 20;
estudianteCopia.direccion.calle = "Av. 123";

console.log("Actividad 9 : Copiar objetos")
console.log("Objeto original:");
console.log(estudiante);

console.log("Copia modificada:");
console.log(estudianteCopia);