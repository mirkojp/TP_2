hasProperty = (obj, atr_name) =>{
    return obj.hasOwnProperty(atr_name)
}
console.log("Actividad 6 : Existe Propiedad");
console.log(`Producto.disponible = ${hasProperty(producto, "disponible")}`)
console.log(`Producto.stock = ${hasProperty(producto, "stock")}`)