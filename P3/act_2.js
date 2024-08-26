async function imprimirNombresDeUsuarios() {
    const users = await obtenerUsers()
    const nombres = users.map(user => user.name)
    console.log("Actividad 2 : nombres users");
    console.log("Nombres de Usuarios:")
    console.log(nombres)
}

imprimirNombresDeUsuarios()