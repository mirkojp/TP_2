const producto = {
    nombre : "Manzana",
    precio : 200,
    disponible : true
};

console.log("Actividad 4 : Atributos producto");
for (let key in producto) {
    console.log(`${key} = ${producto[key]}`);
};

