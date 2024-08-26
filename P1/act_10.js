// const libro = {
//     titulo: "Asi hablo Zaratustra",
//     autor: "Nietzsche",
//     añoDePublicacion: "1883",
// };

libro.getTitulo = () => {
    return libro.titulo
}

libro.getAutor= () => {
    return libro.Autor
}
libro.getAñoDePublicacion = () => {
    return libro.añoDePublicacion
}

libro.setTitulo = (newTitulo) => {
    libro.titulo = newTitulo
}

libro.setAutor = (newAutor) => {
    libro.autor = newAutor
}
libro.setAñoDePublicacion = (newAñoDePublicacion) => {
    libro.añoDePublicacion = newAñoDePublicacion
}
console.log("Actividad 10 : Getters y setters")
libro.setAñoDePublicacion("1882");
console.log(`El año del libro ${libro.getTitulo()} es ${libro.getAñoDePublicacion()}`);